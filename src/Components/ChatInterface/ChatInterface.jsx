import React from 'react';
import { useChat } from "../../Context/ChatContext";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatInterface = () => {
  const { messages } = useChat();

  return (
    <div className="flex flex-col h-[calc(100dvh-4rem)] sm:h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-4 sm:px-0 sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={`${index}-${message.timestamp}`}
              message={message}
              isUser={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-chat-input mx-auto">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
