import React, { useState } from "react";
export default function Form({ contact, setContact }) {
  const [new3, setNew3] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNew3((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setContact((oldArray) => [...oldArray, new3]);
        setNew3({ name: "", email: "" });
      }}
    >
      <p>Add Contact</p>
      <div className="coninp">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={new3.name}
          onChange={handleChange}
          placeholder='Name'
          required
          autofocus
        />
      </div>
      <div className="coninp">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={new3.email}
          onChange={handleChange}
          placeholder='Email'
          required
        />
      </div>
      <button
        className="submit"
      >
        Add
      </button>
    </form>
  );
}
