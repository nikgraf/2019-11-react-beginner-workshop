import React from "react";
import ReactDOM from "react-dom";

const Hello = () => {
  return <div>Hello World!</div>;
};

const node = document.getElementById("root");

ReactDOM.render(<Hello />, node);
