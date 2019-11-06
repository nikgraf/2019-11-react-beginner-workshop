import React from "react";
import Phone from "./Phone";
import Card from "./Card";
import AddForm from "./AddFormIII";

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
            </Card>
          </li>
        ))}
      </ul>
      <AddForm addPlace={props.addPlace} />
    </>
  );
}
