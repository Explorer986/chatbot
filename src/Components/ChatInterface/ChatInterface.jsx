import React from 'react';
import { useChat } from "../../Context/ChatContext";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatInterface = () => {
  const { messages } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Messages area with padding bottom to account for input height */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-chat-area mx-auto space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={`${index}-${message.timestamp}`}
              message={message}
              isUser={message.isUser}
            />
          ))}
        </div>
      </div>

      {/* Input area fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 p-4 border-t border-gray-800">
        <div className="max-w-chat-area mx-auto">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
