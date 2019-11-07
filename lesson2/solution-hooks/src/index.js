import React, { useState } from "react";
import ReactDOM from "react-dom";
import Places from "./Places";
import AddForm from "./AddForm";
import data from "./data";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const [places, setPlaces] = useState(data.places);

  const addPlace = place => {
    const newPlace = { ...place, id: uuidv4() };
    setPlaces([...places, newPlace]);
  };

  return (
    <>
      <h1>Places</h1>
      <Places places={places} addPlace={addPlace} />
      <AddForm addPlace={addPlace} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
