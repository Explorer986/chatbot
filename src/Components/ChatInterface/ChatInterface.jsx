import React from 'react';
import { useChat } from "../../Context/ChatContext";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatInterface = () => {
  const { messages } = useChat();

  return (
    <div className="flex flex-col h-[calc(100dvh-4rem)] sm:h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-32 sm:pb-36">
        <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={`${index}-${message.timestamp}`}
              message={message}
              isUser={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatInterface;
