import React from "react";

class TextInputWithFocusButton extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  onButtonClick = () => {
    // `current` points to the mounted text input element
    this.inputElement.current.focus();
  };

  render() {
    return (
      <>
        <input ref={this.inputElement} type="text" />
        <button onClick={this.onButtonClick}>Focus on the Input</button>
      </>
    );
  }
}

export default TextInputWithFocusButton;
