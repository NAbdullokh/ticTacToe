import React from "react";
import "./Reset.css";

const Reset = ({ resetBoard }) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      Reset
    </button>
  );
};

export default Reset;
