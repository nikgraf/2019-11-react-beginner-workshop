import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Hello");

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={evt => setText(evt.target.value)}
      />
      <p>Preview: {text}</p>
    </form>
  );
}

export default App;
