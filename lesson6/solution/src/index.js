import React, { useState } from "react";
import ReactDOM from "react-dom";
import Places from "./Places";
import AddForm from "./AddForm";
import data from "./data";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  const [places, setPlaces] = useState(data.places);
  const [theme, setTheme] = useState("light");

  const addPlace = place => {
    setPlaces([...places, place]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeSwitcher />
      <h1>Places</h1>
      <Places places={places} addPlace={addPlace} />
      <AddForm addPlace={addPlace} />
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
