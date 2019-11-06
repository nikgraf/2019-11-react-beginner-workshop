import React from "react";
import ReactDOM from "react-dom";
import Places from "./Places";
import data from "./data";

function App() {
  return (
    <>
      <h1>Places</h1>
      <Places places={data.places} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
