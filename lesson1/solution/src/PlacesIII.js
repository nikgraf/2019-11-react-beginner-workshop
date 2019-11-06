import React from "react";
import Phone from "./Phone";

export default function App(props) {
  return (
    <ul>
      {props.places.map(place => (
        <li key={place.id}>
          {place.name}
          {place.phone && <Phone phone={place.phone} />}
          {place.email && <div>{place.email}</div>}
        </li>
      ))}
    </ul>
  );
}
