import React from "react";
import { ChatProvider } from "./Context/ChatContext";
import ChatInterface from "./Components/ChatInterface/ChatInterface";
import Navbar from "./Components/Navbar/Navbar";
import './styles/animations.css';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen animate-gradient">
        <Navbar />
        <div className="h-[calc(100vh-4rem)] overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
