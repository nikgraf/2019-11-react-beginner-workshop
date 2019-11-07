import React from "react";

function ProductDetail(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Comments />
    </div>
  );
}

function Comments() {
  return (
    <div>
      <h2>Comments</h2>
      <p>Anna: Best board ever!</p>
      <p>Tim: I broke my arm with this board :(</p>
    </div>
  );
}

function App() {
  return <ProductDetail name="Snowboard" />;
}

export default App;
