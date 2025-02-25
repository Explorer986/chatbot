import React from 'react';
import { useChat } from "../../Context/ChatContext";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatInterface = () => {
  const { messages } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto mb-24"> {/* Changed pb-20 to mb-24 */}
        <div className="max-w-chat-area mx-auto space-y-4 p-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={`${index}-${message.timestamp}`}
              message={message}
              isUser={message.isUser}
            />
          ))}
          {/* Spacer div to ensure last message is visible */}
          <div className="h-8"></div>
        </div>
      </div>

      {/* Input area fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 shadow-lg">
        <div className="max-w-chat-area mx-auto p-4">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
