import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Hello"
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.text}
          onChange={evt => this.setState({ text: evt.target.value })}
        />
        <p>Preview: {this.state.text}</p>
      </form>
    );
  }
}

export default App;
