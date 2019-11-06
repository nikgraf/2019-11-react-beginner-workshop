import React from "react";

const handleClick = clickEvent => {
  console.log(clickEvent);
  alert("Clicked!");
};

function Example() {
  return <button onClick={handleClick}>Click me!</button>;
}

export default Example;
