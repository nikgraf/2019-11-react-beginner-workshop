import React, { useState } from "react";

function Toggle(props) {
  return <button onClick={props.onToggle}>Toggle</button>;
}

function App() {
  const [active, setActive] = useState(true);
  function toggle() {
    // setActive(currentActive => !currentActive);
    setActive(!active);
  }

  return (
    <div>
      <Toggle onToggle={toggle} />
      <div>{active ? "Active" : "Inactive"}</div>
    </div>
  );
}

export default App;
