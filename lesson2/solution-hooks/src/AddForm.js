import React, { useState } from "react";

// <AddForm addPlace={(place) => { doSomething(place)}} />

function AddForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        props.addPlace({
          name,
          phone,
          email
        });
      }}
    >
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
