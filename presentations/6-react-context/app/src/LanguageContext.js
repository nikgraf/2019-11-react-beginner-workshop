import React from "react";

const LanguageContext = React.createContext({
  lang: "en",
  setLang: () => undefined
});

export default LanguageContext;
