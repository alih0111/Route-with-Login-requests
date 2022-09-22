import React, { useState } from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";

export default function Container() {
  const [contact, setContact] = useState([]);

  const delHandler = (e) => {
    // contact.map((item) => {
      setContact(
        contact.filter(function (item) {
          return item.email !== e;
        })
      );
    // });
  };

  return (
    <div className="container">
      <Form contact={contact} setContact={setContact} />
      <List contact={contact} delHandler={delHandler} />
    </div>
  );
}
