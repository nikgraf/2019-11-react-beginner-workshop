import React, { useState } from "react";
import ReactDOM from "react-dom";
import Places from "./Places";
import data from "./data";

function App() {
  const [places, setPlaces] = useState(data.places);

  const addPlace = place => {
    // TODO add id
    setPlaces([...places, place]);
  };

  const updatePosition = evt => {
    evt.preventDefault()
    const [place, ...otherPlaces] = places;
    place.location.lat = 48.2
    setPlaces([place, ...otherPlaces])
  };

  return (
    <>
      <h1>Places</h1>
      <button onClick={updatePosition}>Update</button>
      <Places places={places} addPlace={addPlace} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
