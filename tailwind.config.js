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
        'chat-input': {
          'DEFAULT': '90%', // Mobile width
          'sm': '90%',
          'md': '80%',
          'lg': '75%'  // Adjusted laptop width
        },
        'chat-area': {
          'DEFAULT': '100%', // Full width on mobile
          'sm': '90%',
          'md': '80%',
          'lg': '75%'  // Matching laptop width
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: {
              'DEFAULT': '75%',
              'sm': '90%',
              'md': '90%',
              'lg': '90%'
            },
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            hyphens: 'auto',
            table: {
              width: '90%',
              tableLayout: 'fixed',
              borderCollapse: 'collapse',
              overflowX: 'auto',
              display: 'table', // Changed from 'block' to 'table'
              '& td, & th': {
                width: 'auto',
                minWidth: 'auto',
                wordBreak: 'break-word'
              }, 
              padding: '0.75rem 1rem',
              border: '1px solid #4b5563',
              borderRadius: '0.5rem',
            },
            'thead th': {
              width: 'auto',
              backgroundColor: '#374151',
              color: '#e5e7eb',
              fontWeight: '600',
              textAlign: 'center'
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