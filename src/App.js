import React, { useEffect, useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import getContacts from "./services/getContactsService";
import deleteContact from "./services/deleteContactsService";
import addContact from "./services/addContactService";
import EditContact from "./components/EditContact/EditContact";
import updateContact from "./services/updateContact";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    // if (savedContacts) setContacts(savedContacts);
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}

    // setContacts((prev) => [...prev, contact]);

    // const newAdded = {
    //   id: Math.ceil(Math.random() * 100),
    //   name: contact.name,
    //   email: contact.email,
    // };
    // setContacts([...contacts, newAdded]);
  };

  const editContactHandler = async (contact, id) => {
    //put
    try {
      await updateContact(id, contact);
      const { data } = await getContacts();
      setContacts(data);
    } catch (error) {}
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  return (
    <main className="App">
      <h1> Contact Manager</h1>
      <Switch>
        <Route path="/user/:id" component={ContactDetail} />
        <Route
          path="/edit/:id"
          render={(props) => (
            <EditContact editContactHandler={editContactHandler} {...props} />
          )}
        />
        <Route
          path="/add"
          render={(props) => (
            <AddContact addContactHandler={addContactHandler} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          )}
        />
      </Switch>
    </main>
  );
}
