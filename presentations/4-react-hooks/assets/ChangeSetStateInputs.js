import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <form>
      <input
        type="text"
        value={name}
        placeholder="Please provide your name"
        onChange={evt => setName(evt.target.value)}
      />
      <input
        type="number"
        value={age}
        placeholder="Please provide your age"
        onChange={evt => setAge(evt.target.value)}
      />
    </form>
  );
}

export default App;
