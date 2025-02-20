import { marked } from 'marked';

export const generateAIResponse = async (userMessage) => {
    try {
      // Input validation
      if (!userMessage?.trim()) {
        throw new Error("Message cannot be empty");
      }

      // System prompt to ensure structured responses
      const systemPrompt = `Please structure your responses using proper markdown:
      - Use # for main headings, ## for subheadings
      - Use \`\`\` with language specification for code blocks
      - For tables, use the following format exactly:
        | Header1 | Header2 |
        |---------|---------|
        | Cell1   | Cell2   |
        Make sure there are no spaces between table rows and separator lines.
      - Use * or - for bullet points
      - Use 1. 2. 3. for numbered lists
      - Use > for quotes
      - Use **text** for bold and *text* for italic`;

      const response = await fetch(import.meta.env.VITE_LLAMA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_LLAMA_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { 
              role: "system", 
              content: systemPrompt
            },
            { 
              role: "user", 
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 2000,
          stream: false
        }),
      });

      console.log("API response:", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("API data:", data);
      
      if (!data.choices?.[0]?.message?.content) {
        throw new Error("Invalid response structure from API");
      }

      // Fix table formatting in the response
      const fixTableFormatting = (content) => {
        return content.replace(
          /\| (.+) \| (.+) \| \|[-|\s]+\| [-|\s]+\|/g,
          (match, header1, header2) => {
            return `| ${header1} | ${header2} |\n|---------|---------|`
          }
        ).replace(
          /\| (.+) \| (.+) \|(?!\n\|[-])/g,
          (match, col1, col2) => `| ${col1} | ${col2} |`
        );
      };

      const content = data.choices[0].message.content;
      const formattedContent = fixTableFormatting(content);

      console.log("AI response content:", formattedContent);

      // Validate markdown structure
      try {
        marked.parse(formattedContent);
        return {
          type: 'markdown',
          content: formattedContent,
          timestamp: new Date().toISOString()
        };
      } catch (markdownError) {
        console.warn("Invalid markdown structure:", markdownError);
        return {
          type: 'text',
          content: formattedContent,
          timestamp: new Date().toISOString()
        };
      }

    } catch (error) {
      console.error("Error in AI response generation:", error);
      return {
        type: 'error',
        content: error.message || "An unexpected error occurred",
        timestamp: new Date().toISOString()
      };
    }
};

// Helper function to check if the response is valid markdown
export const isValidMarkdown = (content) => {
  try {
    marked.parse(content);
    return true;
  } catch {
    return false;
  }
};

