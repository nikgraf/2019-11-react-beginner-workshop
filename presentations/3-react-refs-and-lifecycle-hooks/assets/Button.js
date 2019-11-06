import React, { Component } from "react";

class Button extends Component {

  shouldComponentUpdate(nextProps) {
    if (this.props.color !== nextProps.color) {
      console.log("shouldComponentUpdate true")
      return true;
    }
    console.log("shouldComponentUpdate false")
    return false;
  }

  render() {
    console.log('render');
    return (
      <button style={{ color: this.props.color }}>
        Click me!
      </button>
    );
  }
}

export default Button;
