import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.name}
          placeholder="Please provide your name"
          onChange={evt => this.setState({ name: evt.target.value })}
        />
        <input
          type="number"
          value={this.state.age}
          placeholder="Please provide your age"
          onChange={evt => this.setState({ age: evt.target.value })}
        />
      </form>
    );
  }
}

export default App;
