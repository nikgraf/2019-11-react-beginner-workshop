import React from "react";
import Phone from "./Phone";
import Card from "./Card";
import AddForm from "./AddForm";
import Map from "./Map";

export default function App(props) {
  return (
    <>
      <ul>
        {props.places.map(place => (
          <li key={place.id}>
            <Card>
              {place.name}
              {place.phone && <Phone phone={place.phone} />}
              {place.email && <div>{place.email}</div>}
              {place.location && place.location.lat && place.location.long && (
                <Map lat={place.location.lat} long={place.location.long} />
              )}
            </Card>
          </li>
        ))}
      </ul>
      <AddForm addPlace={props.addPlace} />
    </>
  );
}
