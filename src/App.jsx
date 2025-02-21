import React from "react";
import { ChatProvider } from "./Context/ChatContext";
import ChatInterface from "./Components/ChatInterface/ChatInterface";
import Navbar from "./Components/Navbar/Navbar";
import './styles/animations.css';

const App = () => {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-900 pb-32">
        <Navbar />
        <ChatInterface />
      </div>
    </ChatProvider>
  );
};

export default App;
