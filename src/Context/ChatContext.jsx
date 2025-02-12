import React, { createContext, useState, useContext, useCallback } from "react";
import { generateAIResponse } from "../services/AIServices"; // Import AI function

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { id: 1, type: "ai", text: "Ask me anything..." },
  ]);

  const addMessage = useCallback(async (text) => {
    const userMessage = {
      id: Date.now(),
      type: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]); // Add user input first

    try {
      const aiResponseText = await generateAIResponse(text);
      const aiResponse = {
        id: Date.now() + 1,
        type: "ai",
        text: aiResponseText,
      };

      setMessages((prev) => [...prev, aiResponse]); // Append AI response
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  }, []);

  const editMessage = useCallback(async (id, newText) => {
    setMessages((prev) => {
      const index = prev.findIndex((msg) => msg.id === id);
      if (index === -1) return prev; // If not found, return original messages

      const updatedMessages = prev.slice(0, index + 1);
      updatedMessages[index] = { ...updatedMessages[index], text: newText };

      return updatedMessages; // Remove old responses
    });

    try {
      const newAiResponseText = await generateAIResponse(newText);
      const newAiResponse = {
        id: Date.now() + 1,
        type: "ai",
        text: newAiResponseText,
      };

      setMessages((prev) => [...prev, newAiResponse]); // Add new AI response
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  }, []);

  const clearChat = useCallback(() => {
    setMessages([{ id: 1, type: "ai", text: "Ask me anything..." }]);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, addMessage, editMessage, clearChat, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
