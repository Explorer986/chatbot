import React, { useState } from "react";
import { useChat } from "../../Context/ChatContext";
import { RobotIcon, UserIcon } from "../Icons/Icons";

const ChatMessage = ({ message }) => {
  const { editMessage, setMessages } = useChat(); // Removed messages (not needed here)
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(message.text);

  const handleEdit = () => {
    if (message.type === "user") {
      // Update the edited message
      editMessage(message.id, editedText);
      setIsEditing(false);

      // Remove all messages below this edited one
      setMessages((prev) => {
        const index = prev.findIndex((msg) => msg.id === message.id);
        return prev.slice(0, index + 1); // Keep only messages above & the edited one
      });

      // 🚀 FIX: Removed `generateAIResponse` call here (AI should respond only when asked)
    }
  };

  return (
    <div className={`flex items-start mb-4 ${message.type === "user" ? "justify-end" : "justify-start"}`}>
      {message.type === "ai" && <RobotIcon />}
      <div className="flex flex-col max-w-[80%]">
        <div className={`px-5 py-2 rounded-2xl relative break-words 
            ${message.type === "user" ? "bg-gray-200" : "bg-gray-300"}
          `}>
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={handleEdit}
              onKeyPress={(e) => e.key === "Enter" && handleEdit()}
              className="w-full bg-transparent outline-none break-words max-w-full"
            />
          ) : (
            <span className="break-words">{message.text}</span>
          )}
        </div>
        {message.type === "user" && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="self-end mt-1 text-xs text-gray-500 hover:text-gray-700"
          >
            Edit
          </button>
        )}
      </div>
      {message.type === "user" && <UserIcon />}
    </div>
  );
};

export default ChatMessage;
