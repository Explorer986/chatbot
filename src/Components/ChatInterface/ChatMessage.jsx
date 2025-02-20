import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaUser } from 'react-icons/fa';
import { RiRobot2Fill } from 'react-icons/ri';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`w-full backdrop-blur-sm ${isUser ? 'bg-gray-700/30' : 'bg-gray-800/40'} 
                    rounded-xl my-2 message-fade-in border border-gray-700/50`}>
      <div className="max-w-3xl mx-auto flex p-6 text-gray-200">
        <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
          {isUser ? (
            <div className="p-1 rounded-full bg-teal-500/20 hover:bg-teal-500/30 
                          transition-all duration-300 hover:scale-110">
              <FaUser className="w-5 h-5 text-teal-400" />
            </div>
          ) : (
            <div className="p-1 rounded-full bg-blue-500/20 hover:bg-blue-500/30 
                          transition-all duration-300 hover:scale-110">
              <RiRobot2Fill className="w-5 h-5 text-blue-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1 prose prose-invert max-w-none">
          {message.type === 'markdown' ? (
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <div className="relative group">
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                        className="!bg-[#1a1a1a] !mt-2 !mb-4 rounded-lg"
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => navigator.clipboard.writeText(String(children))}
                        className="absolute top-2 right-2 invisible group-hover:visible 
                                 bg-[#2d2d2d] text-white px-2 py-1 rounded text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  ) : (
                    <code className="bg-[#1a1a1a] rounded-sm px-1 py-0.5" {...props}>
                      {children}
                    </code>
                  );
                },
                pre({ children }) {
                  return <pre className="!bg-transparent">{children}</pre>;
                },
                p({ children }) {
                  return <p className="mb-4 last:mb-0">{children}</p>;
                },
                ul({ children }) {
                  return <ul className="list-disc ml-4 mb-4">{children}</ul>;
                },
                ol({ children }) {
                  return <ol className="list-decimal ml-4 mb-4">{children}</ol>;
                },
                li({ children }) {
                  return <li className="mb-1">{children}</li>;
                },
                table({ children }) {
                  return (
                    <div className="overflow-x-auto my-4">
                      <table className="border-collapse border border-gray-600 w-full">
                        {children}
                      </table>
                    </div>
                  );
                },
                thead({ children }) {
                  return <thead className="bg-gray-800">{children}</thead>;
                },
                tbody({ children }) {
                  return <tbody className="bg-gray-900">{children}</tbody>;
                },
                tr({ children }) {
                  return <tr className="border-b border-gray-600">{children}</tr>;
                },
                th({ children }) {
                  return (
                    <th className="border border-gray-600 px-4 py-2 text-left">
                      {children}
                    </th>
                  );
                },
                td({ children }) {
                  return (
                    <td className="border border-gray-600 px-4 py-2">
                      {children}
                    </td>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          ) : (
            <div className="whitespace-pre-wrap">{message.content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
