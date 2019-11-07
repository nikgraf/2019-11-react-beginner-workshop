import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function LangSwitcher() {
  //   const { setLang } = useContext(LanguageContext);

  return (
    <LanguageContext.Consumer>
      {({ setLang }) => {
        return (
          <>
            <button onClick={() => setLang("en")} type="button">
              en
            </button>
            <button onClick={() => setLang("de")} type="button">
              de
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}

export default LangSwitcher;
