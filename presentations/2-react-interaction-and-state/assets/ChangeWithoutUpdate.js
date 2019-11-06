import React from "react";

let count = 0;

function App() {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={evt => {
          console.log(evt);
          count += 1;
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
