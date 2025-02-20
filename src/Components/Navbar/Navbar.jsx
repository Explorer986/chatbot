import React from 'react';
import { useChat } from "../../Context/ChatContext";
import { RiRobot2Fill } from 'react-icons/ri';

const Navbar = () => {
  const { clearMessages } = useChat();
  const [isLoggedIn] = React.useState(true);
  const [userName] = React.useState('Demo User');

  return (
    <nav className="w-full bg-custom-navbar border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 sm:gap-3 hover-pulse">
          <RiRobot2Fill className="w-6 h-6 sm:w-8 sm:h-8 text-accent-primary" />
          <span className="text-lg sm:text-xl font-semibold text-gray-200">ChatBot</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          {isLoggedIn ? (
            <>
              <span className="hidden sm:inline text-gray-300 text-sm">Welcome, {userName}</span>
              <button
                onClick={clearMessages}
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-300 
                         bg-custom-userMsg hover:bg-opacity-80 
                         rounded-md transition-all duration-300 hover:scale-105"
              >
                Clear
              </button>
              <button
                onClick={() => {/* Add logout logic */}}
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white 
                         bg-red-500/80 hover:bg-red-600/80 
                         rounded-md transition-all duration-300 hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white 
                               bg-accent-primary hover:bg-opacity-80 
                               rounded-md transition-all duration-300 hover:scale-105">
                Sign In
              </button>
              <button className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-accent-primary 
                               border border-accent-primary hover:bg-accent-primary/10 
                               rounded-md transition-all duration-300 hover:scale-105">
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
