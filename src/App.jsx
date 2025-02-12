import React from 'react'
import { ChatProvider } from './Context/ChatContext'
import ChatInterface from './Components/ChatInterface/ChatInterface'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <ChatProvider>
      
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-2 py-4">
          <ChatInterface />
        </div>
      </div>
    </ChatProvider>
  )
}

export default App