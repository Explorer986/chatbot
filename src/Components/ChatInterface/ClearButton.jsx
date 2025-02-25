import React from 'react';
import { useChat } from '../../Context/ChatContext';

const ClearButton = () => {
  const { clearMessages, isLoading } = useChat();

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all messages?')) {
      clearMessages();
    }
  };

  return (
    <button
      onClick={handleClear}
      disabled={isLoading}
      className="px-4 py-2 text-sm font-medium text-white bg-red-600 
                 hover:bg-red-700 rounded-md transition-colors duration-200 
                 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Clear chat history"
    >
      Clear Chat
    </button>
  );
};

export default ClearButton;