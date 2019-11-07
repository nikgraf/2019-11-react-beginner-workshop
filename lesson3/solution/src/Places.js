import React from "react";
import Phone from "./Phone";
import Card from "./Card";
import Map from "./Map";

export default function App(props) {
  return (
    <ul>
      {props.places.map(place => (
        <li key={place.id}>
          <Card>
            {place.name}
            {place.phone && <Phone phone={place.phone} />}
            {place.email && <div>{place.email}</div>}
            {place.location && place.location.lat && place.location.long && (
              <Map location={place.location} />
            )}
          </Card>
        </li>
      ))}
    </ul>
  );
}
