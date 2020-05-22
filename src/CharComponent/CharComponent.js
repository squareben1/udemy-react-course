import React from "react";

const CharComponent = (props) => {
  const charStyle = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textalign: "center",
  };
  return <div style={charStyle}>Character: {props.char}</div>;
};

export default CharComponent;
