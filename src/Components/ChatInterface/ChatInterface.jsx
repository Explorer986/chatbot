import React from "react";
import { useChat } from "../../Context/ChatContext";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatInterface = () => {
  const { messages } = useChat();

  return (
    <div className="max-w-2xl w-full mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="p-4 h-[75vh] overflow-y-auto">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatInterface;
