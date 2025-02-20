import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaUser } from 'react-icons/fa';
import { RiRobot2Fill } from 'react-icons/ri';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`w-full ${
      isUser ? 'bg-custom-userMsg' : 'bg-custom-botMsg'
    } rounded-xl my-2 message-fade-in border border-gray-700`}>
      <div className="max-w-3xl mx-auto flex p-3 sm:p-6 text-gray-200">
        <div className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4">
          {isUser ? (
            <div className="p-1 rounded-full bg-accent-primary/20">
              <FaUser className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
            </div>
          ) : (
            <div className="p-1 rounded-full bg-accent-secondary/20">
              <RiRobot2Fill className="w-4 h-4 sm:w-5 sm:h-5 text-accent-secondary" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0 prose prose-invert max-w-none prose-sm sm:prose-base break-words">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({node, ...props}) => <p className="break-words" {...props} />,
              table: ({node, ...props}) => (
                <div className="w-full overflow-x-auto my-4">
                  <table className="w-full table-fixed border-collapse border border-gray-600 rounded-lg" {...props} />
                </div>
              ),
              thead: ({node, ...props}) => <thead className="bg-gray-800 w-full" {...props} />,
              tbody: ({node, ...props}) => (
                <tbody className="bg-gray-900 divide-y divide-gray-600 w-full" {...props} />
              ),
              tr: ({node, ...props}) => <tr className="w-full hover:bg-gray-800/50" {...props} />,
              th: ({node, ...props}) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200 border-b border-gray-600 w-1/2" {...props} />
              ),
              td: ({node, ...props}) => (
                <td className="px-4 py-3 text-sm text-gray-300 border-gray-600 w-1/2" {...props} />
              ),
              pre: ({node, ...props}) => (
                <pre className="overflow-x-auto p-4 rounded-lg bg-gray-800 text-sm leading-6" {...props} />
              ),
              code: ({node, inline, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className="relative group max-w-full overflow-hidden">
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{
                        maxWidth: '100%',
                        width: '100%'
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                    <button
                      onClick={() => navigator.clipboard.writeText(String(children))}
                      className="absolute top-2 right-2 invisible group-hover:visible 
                               bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      Copy
                    </button>
                  </div>
                ) : (
                  <code className="bg-gray-800 rounded-sm px-1 py-0.5 text-sm" {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
