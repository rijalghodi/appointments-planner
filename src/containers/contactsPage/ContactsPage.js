import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const { contacts, addContact, deleteContact } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data if the contact name is not a duplicate
    */
    if (!isDuplicated && !isEmpty) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
      setIsEmpty(true);
      setIsDuplicated(false);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (name && phone && email) {
      setIsEmpty(false);
      return 0;
    }
    for (const contact of contacts) {
      if (contact.name === name) {
        setIsDuplicated(true);
        break;
      }
    }
  }, [name, phone, email, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} deleteItem={deleteContact} />
      </section>
    </div>
  );
};
