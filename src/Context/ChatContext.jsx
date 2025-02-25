import React, { createContext, useContext, useState } from 'react';
import { generateStreamResponse, fixStreamingChunk } from '../services/AiServices';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const processStreamChunk = (chunk) => {
    try {
      const lines = chunk.split('\n').filter(line => line.trim() !== '');
      let content = '';
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const jsonStr = line.replace('data: ', '');
          if (jsonStr === '[DONE]') continue;
          
          const jsonData = JSON.parse(jsonStr);
          const chunkContent = jsonData.choices[0]?.delta?.content || '';
          content += chunkContent;
        }
      }
      return content;
    } catch (error) {
      console.error('Error processing chunk:', error);
      return '';
    }
  };

  const addMessage = async (content) => {
    try {
      setIsLoading(true);
      
      // Add user message
      const userMessage = { content, isUser: true, timestamp: new Date().toISOString() };
      setMessages(prev => [...prev, userMessage]);

      // Create initial bot message
      const botMessage = { content: '', isUser: false, timestamp: new Date().toISOString() };
      setMessages(prev => [...prev, botMessage]);

      const response = await generateStreamResponse(content);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Decode and process the chunk
        const chunk = decoder.decode(value);
        const processedContent = processStreamChunk(chunk);
        const formattedChunk = fixStreamingChunk(processedContent);
        accumulatedResponse += formattedChunk;

        // Update the last message with accumulated response
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = accumulatedResponse;
          return newMessages;
        });
      }

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = "Sorry, an error occurred while processing your request.";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ messages, isLoading, addMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
};
