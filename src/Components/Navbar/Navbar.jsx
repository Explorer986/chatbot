import React from "react";
import { RobotIcon } from "../Icons/Icons";
import { useChat } from "../../Context/ChatContext";

const Navbar = () => {
  const { clearChat } = useChat();

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col items-center relative">
      {/* Chatbot Icon (Top Left) */}
      <div className="absolute top-2 left-4">
        <RobotIcon size={32} />
      </div>

      {/* Centered Title */}
      <h1 className="text-xl font-bold">ChatBot</h1>

      {/* Clear Chat Button (Top Right, Dark Grey) */}
      <div className="absolute top-2 right-4">
        <button
          onClick={clearChat}
          className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors"
        >
          Clear Chat
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
