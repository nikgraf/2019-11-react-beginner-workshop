import React from "react";

const Toggle = props => {
  return <button onClick={props.onToggle}>Toggle</button>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleToggle = changeEvent => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <div>
        <Toggle onToggle={this.handleToggle} />
        <div>{this.state.isActive ? "Active" : "Inactive"}</div>
        <Toggle onToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;
