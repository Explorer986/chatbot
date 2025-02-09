import React from "react";
import './../App.css';

const Outputtext = ({ value }) => {
  return (
    <div className="output-container mt-3">
      <textarea
        className="form-control text-output"
        value={value}
        readOnly
      ></textarea>
    </div>
  );
};

export default Outputtext;