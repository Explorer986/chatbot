import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Inputtext from "./Components/Inputtext";
import Outputtext from "./Components/Outputtext";
import "./App.css";

function App() {
  const [sections, setSections] = useState([{ id: 1, input: "", output: "", editable: true }]);

  // Handles input changes for a specific section (only if editable)
  const handleInputChange = (id, value) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id && section.editable ? { ...section, input: value } : section
      )
    );
  };

  // Handles API call and prevents editing after response
  const handleAsk = async (id) => {
    const currentSection = sections.find((s) => s.id === id);

    try {
      const response = await fetch(import.meta.env.VITE_LLAMA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_LLAMA_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: currentSection.input }],
        }),
      });

      const data = await response.json();
      const output = data.choices?.[0]?.message?.content || "We are facing some issues at the moment.";

      // Update the output of the current section & disable editing
      setSections((prev) =>
        prev.map((section) =>
          section.id === id ? { ...section, output, editable: false } : section
        )
      );

      // Add a new input-output section below
      setSections((prev) => [
        ...prev,
        { id: prev.length + 1, input: "", output: "", editable: true },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Clears a specific section (only if no output is returned)
  const handleClear = (id) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id && section.editable ? { ...section, input: "", output: "" } : section
      )
    );
  };

  // Clears all sections and resets to one editable input box
  const handleClearAll = () => {
    setSections([{ id: 1, input: "", output: "", editable: true }]);
  };

  return (
    <div className="app-container bg-secondary min-vh-100 d-flex flex-column align-items-center py-4">
      <Navbar />
      <div className="content-container bg-light p-4 rounded shadow-sm w-80">
        {sections.map((section) => (
          <div key={section.id} className="mb-4 p-3 border border-dark rounded">
            <Inputtext 
              value={section.input} 
              onChange={(e) => handleInputChange(section.id, e.target.value)} 
              disabled={!section.editable} // Prevents editing after response
            />
            <div className="button-group mt-3">
              <button className="btn btn-secondary me-2" onClick={() => handleAsk(section.id)} disabled={!section.editable}>
                Ask
              </button>
              <button className="btn btn-danger" onClick={() => handleClear(section.id)} disabled={!section.editable}>
                Clear
              </button>
            </div>
            {section.output !== "" && <Outputtext value={section.output} />}

          </div>
        ))}
        <button className="btn btn-dark mt-3 " onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
