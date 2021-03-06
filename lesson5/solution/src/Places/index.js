import React from "react";
import Phone from "../Phone";
import Card from "../Card";
import AddForm from "../AddForm";
import Map from "../Map";
import styles from "./places.module.css";

export default function App(props) {
  return (
    <>
      <ul>
        {props.places.map(place => (
          <li key={place.id}>
            <Card>
              <div className={styles.wrapper}>
                {place.images && place.images.length > 0 ? (
                  <img
                    src={place.images[0].url}
                    alt="preview"
                    className={styles.preview}
                  />
                ) : (
                  place.location &&
                  place.location.lat &&
                  place.location.long && (
                    <Map
                      lat={place.location.lat}
                      long={place.location.long}
                      className={styles.preview}
                    />
                  )
                )}
                <div>
                  {place.name}
                  {place.phone && <Phone phone={place.phone} />}
                  {place.email && <div>{place.email}</div>}
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <AddForm addPlace={props.addPlace} />
    </>
  );
}
