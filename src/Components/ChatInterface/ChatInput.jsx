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
    <div className="w-full bg-gradient-to-t from-custom-navbar to-transparent 
                    pb-4 sm:pb-6 lg:pb-8 pt-4 sm:pt-6 fixed bottom-0 left-0">
      <div className="max-w-chat-input mx-auto px-4">
        <form onSubmit={handleSubmit} className="relative group">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            rows={1}
            className="w-full p-3 sm:p-4 pr-12 bg-custom-input text-gray-200 rounded-xl
                     border border-gray-600 focus:border-accent-primary focus:ring-2 
                     focus:ring-accent-primary/30 focus:outline-none shadow-lg
                     placeholder:text-gray-400 disabled:opacity-50
                     transition-all duration-300 resize-none overflow-hidden
                     block min-h-[44px] sm:min-h-[52px] max-h-[200px]"
            placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
            style={{
              paddingRight: '4rem' // Ensure space for the send button
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2
                     text-accent-primary hover:text-accent-secondary transition-all duration-300
                     disabled:opacity-40 disabled:cursor-not-allowed hover:scale-110
                     z-10" // Ensure button stays above text
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