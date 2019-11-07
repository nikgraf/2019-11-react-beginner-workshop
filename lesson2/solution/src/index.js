import React from "react";
import ReactDOM from "react-dom";
import Places from "./Places";
import AddForm from "./AddFormIII";
import data from "./data";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: data.places
    };
  }

  addPlace = place => {
    const newPlace = { ...place, id: uuidv4() };
    this.setState({ places: [...this.state.places, newPlace] });
  };

  render() {
    return (
      <>
        <h1>Places</h1>
        <Places places={this.state.places} />
        <AddForm addPlace={this.addPlace} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
