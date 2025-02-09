import React from "react";
import './../App.css';

const Inputtext = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <textarea
        className="form-control text-input mt-3"
        placeholder="Ask me anything......"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Inputtext;