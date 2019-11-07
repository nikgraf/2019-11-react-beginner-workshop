import React from "react";

function ProductDetail(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Comments language={props.language} />
    </div>
  );
}

function Comments(props) {
  return (
    <div>
      <h2>{props.language === "de" ? "Kommentare" : "Comments"}</h2>
      <p>Anna: Best board ever!</p>
      <p>Tim: I broke my arm with this board :(</p>
    </div>
  );
}

function App() {
  return <ProductDetail name="Snowboard" language="de" />;
}

export default App;
