import React from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  error: ""
};

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  updateName = evt => {
    this.setState({ name: evt.target.value });
  };

  updatePhone = evt => {
    this.setState({ phone: evt.target.value });
  };

  updateEmail = evt => {
    this.setState({ email: evt.target.value });
  };

  render() {
    return (
      <form
        onSubmit={evt => {
          evt.preventDefault();
          if (!this.state.name) {
            this.setState({ error: "Please provide a name!" });
            return;
          }
          this.props.addPlace({
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
          });
          this.setState(initialState);
        }}
      >
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        <input
          type="text"
          value={this.state.name}
          placeholder="name"
          onChange={this.updateName}
        />
        <input
          type="text"
          value={this.state.phone}
          placeholder="phone"
          onChange={this.updatePhone}
        />
        <input
          type="email"
          value={this.state.email}
          placeholder="email"
          onChange={this.updateEmail}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddForm;
