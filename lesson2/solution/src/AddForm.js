import React from "react";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: ""
    };
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
          this.props.addPlace({
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
          });
        }}
      >
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
