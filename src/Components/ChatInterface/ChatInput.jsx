import React, { useState } from 'react'
import { useChat } from '../../Context/ChatContext'
import { SendIcon } from '../Icons/Icons'

const ChatInput = () => {
  const [input, setInput] = useState('')
  const { addMessage } = useChat()

  const handleSend = () => {
    if (input.trim()) {
      addMessage(input)
      setInput('')
    }
  }

  return (
    <div className="p-4 border-t flex items-center">
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
        className="flex-grow mr-3 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={handleSend}
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        <SendIcon />
      </button>
    </div>
  )
}

export default ChatInput