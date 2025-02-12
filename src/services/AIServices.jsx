export const generateAIResponse = async (userMessage) => {
    try {
      const response = await fetch(import.meta.env.VITE_LLAMA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_LLAMA_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: userMessage }],
        }),
      });
  
      const data = await response.json();
      return data.choices?.[0]?.message?.content || "We are facing some issues at the moment.";
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, something went wrong. Please try again later.";
    }
  };
  