import React from "react";

function AddForm(props) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        setError(null);
        if (!name) {
          setError("Please provide the name")
          return;
        }
        if (!email) {
          setError("Please provide the email")
          return;
        }
        props.addPlace({
          name,
          phone,
          email
        });
        setName("");
        setPhone("");
        setEmail("");
      }}
    >
      {Boolean(error) && <div style={{ color: 'red'}}>{error}</div>}
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={evt => setName(evt.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="phone"
        onChange={evt => setPhone(evt.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={evt => setEmail(evt.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddForm;
