import React, { useState } from 'react';
import { useChat } from '../../Context/ChatContext';
import { IoSend } from 'react-icons/io5';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { addMessage, isLoading } = useChat();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      await addMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-gradient-to-t from-gray-900/90 to-transparent 
                    pb-4 sm:pb-6 lg:pb-8 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="w-full p-3 sm:p-4 pr-12 bg-gray-800/50 text-gray-200 rounded-xl
                     border border-gray-600/50 focus:border-teal-500/50 focus:ring-2 
                     focus:ring-teal-500/30 focus:outline-none shadow-lg backdrop-blur-md
                     placeholder:text-gray-400 disabled:opacity-50
                     transition-all duration-300 group-hover:shadow-teal-500/10
                     text-sm sm:text-base"
            placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2
                     text-teal-400 hover:text-teal-300 transition-all duration-300
                     disabled:opacity-40 disabled:cursor-not-allowed hover:scale-110
                     focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            aria-label="Send message"
          >
            <IoSend className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;