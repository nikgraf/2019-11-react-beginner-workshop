import React, { useState } from "react";
import ReactDOM from "react-dom";
import Places from "./Places";
import data from "./data";

function App() {
  const [places, setPlaces] = useState(data.places);

  const addPlace = place => {
    setPlaces([...places, place]);
  };

  return (
    <>
      <h1>Places</h1>
      <Places places={places} addPlace={addPlace} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
