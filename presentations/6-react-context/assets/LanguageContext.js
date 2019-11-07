import React, { useContext } from "react";

const LanguageContext = React.createContext("en");

function ProductDetail(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Comments />
    </div>
  );
}

function Comments() {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h2>{language === "de" ? "Kommentare" : "Comments"}</h2>
      <p>Anna: Best board ever!</p>
      <p>Tim: I broke my arm with this board :(</p>
    </div>
  );
}

function App() {
  return (
    <LanguageContext.Provider value="de">
      <ProductDetail name="Snowboard" />
    </LanguageContext.Provider>
  );
}

export default App;
