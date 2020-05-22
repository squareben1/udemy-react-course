import React, { Component } from "react";

const ValidationComponent = (props) => {
  const lengthCheck = () => {
    return props.inputText.length >= 5 ? "Text long enough" : "Text too short";
  };
  
  return (
    <div>
      <p>{props.inputText}</p>
      <p>{lengthCheck()}</p>
    </div>
  );
};

export default ValidationComponent;
