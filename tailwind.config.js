/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          navbar: '#1a1c2e',
          userMsg: '#2d3748',
          botMsg: '#1a202c',
          input: '#2d3748',
        },
        accent: {
          primary: '#8B5CF6',
          secondary: '#60A5FA',
        }
      },
      maxWidth: {
        'chat-input': '60%',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            hyphens: 'auto',
            table: {
              width: '100%',
              tableLayout: 'fixed',
              borderCollapse: 'collapse',
              overflowX: 'auto',
              display: 'table', // Changed from 'block' to 'table'
              '& td, & th': {
                width: 'auto',
                minWidth: '100px',
                wordBreak: 'break-word'
              }
            },
            'thead th': {
              width: 'auto',
              backgroundColor: '#374151',
              color: '#e5e7eb',
              fontWeight: '600',
              textAlign: 'left'
            },
            'tbody td': {
              width: 'auto',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid #4b5563'
            },
            pre: {
              maxWidth: '100%',
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              padding: '1rem',
            },
            code: {
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            },
            img: {
              maxWidth: '100%',
              height: 'auto',
            },
            p: {
              overflowWrap: 'break-word',
            }
          }
        },
        sm: {
          css: {
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
            p: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            pre: {
              fontSize: '0.8125rem',
            },
            code: {
              fontSize: '0.8125rem',
            },
            table: {
              fontSize: '0.8125rem',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}