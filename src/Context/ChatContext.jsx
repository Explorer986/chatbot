import React, { createContext, useState, useContext } from 'react';
import { generateAIResponse } from '../services/AiServices';

const ChatContext = createContext();

// Custom hook for using chat context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = async (userInput) => {
    try {
      setIsLoading(true);
      const userMessage = {
        type: 'text',
        content: userInput,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, userMessage]);

      const aiResponse = await generateAIResponse(userInput);
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, clearMessages, isLoading }}>
      {children}
    </ChatContext.Provider>
  );
};
