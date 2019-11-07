import React from "react";
import ReactDOM from "react-dom";
import Places from "./Places";
import AddForm from "./AddForm";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: data.places
    };
  }

  addPlace = place => {
    this.setState({ places: [...this.state.places, place] });
  };

  render() {
    return (
      <>
        <h1>Places</h1>
        <Places places={this.state.places} addPlace={this.addPlace} />
        <AddForm addPlace={this.addPlace} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
