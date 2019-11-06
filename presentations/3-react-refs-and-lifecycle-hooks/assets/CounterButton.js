import React, { Component } from "react";

class CounterButton extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      console.log("shouldComponentUpdate color true");
      return true;
    }
    if (this.state.count !== nextState.count) {
      console.log("shouldComponentUpdate count true");
      return true;
    }
    console.log("shouldComponentUpdate false");
    return false;
  }

  render() {
    console.log('render');
    return (
      <button
        style={{ color: this.props.color }}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
