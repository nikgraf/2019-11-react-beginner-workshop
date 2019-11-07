import React, { useContext } from "react";
import LangSwitcher from "./LangSwitcher";
import LanguageContext from "./LanguageContext";

function ProductDetail(props) {
  return (
    <div>
      <h1>{props.name}</h1>

      {/* example overwritting the context */}
      {/* <LanguageContext.Provider
        value={{ lang: "de", setLang: () => undefined }}
      > */}
      <Comments />
      {/* </LanguageContext.Provider> */}
    </div>
  );
}

function Comments() {
  const { lang } = useContext(LanguageContext);
  return (
    <div>
      <h2>{lang === "de" ? "Kommentare" : "Comments"}</h2>
      <p>Anna: Best board ever!</p>
      <p>Tim: I broke my arm with this board :(</p>
    </div>
  );
}

function App() {
  const [lang, setLang] = React.useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <LangSwitcher />
      <ProductDetail name="Snowboard" />
    </LanguageContext.Provider>
  );
}

export default App;
