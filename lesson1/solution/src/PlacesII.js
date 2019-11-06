import React from "react";

export default function App(props) {
  return (
    <ul>
      {props.places.map(place => (
        <li key={place.id}>
          {place.name}
          {place.phone && <div>{place.phone}</div>}
          {place.email && <div>{place.email}</div>}
        </li>
      ))}
    </ul>
  );
}
