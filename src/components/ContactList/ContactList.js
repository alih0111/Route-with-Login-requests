import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./ContactList.css";

export default function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts.map((contact) => {
          return (
            <Contact contact={contact} onDelete={onDelete} />
          );
        })}
      </div>
    </section>
  );
}
