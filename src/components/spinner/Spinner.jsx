import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="lds-roller" data-testid="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
