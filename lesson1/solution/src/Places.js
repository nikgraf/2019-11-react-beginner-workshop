import React from "react";

export default function App(props) {
  return (
    <ul>
      {props.places.map(place => (
        <li key={place.id}>{place.name}</li>
      ))}
    </ul>
  );
}
