import React from 'react';
import { useChat } from "../../Context/ChatContext";
import { RiRobot2Fill } from 'react-icons/ri';

const Navbar = () => {
  const { clearMessages } = useChat();
  const [isLoggedIn] = React.useState(true);
  const [userName] = React.useState('Demo User');

  return (
    <nav className="w-full backdrop-blur-md bg-gray-800/90 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-3 hover-pulse">
          <RiRobot2Fill className="w-8 h-8 text-teal-400" />
          <span className="text-xl font-semibold text-gray-200">ChatBot</span>
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
          {isLoggedIn ? (
            <>
              <span className="text-gray-300">Welcome, {userName}</span>
              <button
                onClick={clearMessages}
                className="px-4 py-2 text-sm text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 
                         rounded-md transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Clear Chat
              </button>
              <button
                onClick={() => {/* Add logout logic */}}
                className="px-4 py-2 text-sm text-white bg-red-500/80 hover:bg-red-600/80 
                         rounded-md transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="px-4 py-2 text-sm text-white bg-teal-500/80 hover:bg-teal-600/80 
                               rounded-md transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm text-teal-400 border border-teal-400/50 
                               hover:bg-teal-400/20 rounded-md transition-all duration-300 hover:scale-105">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
