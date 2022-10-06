import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      id: "000",
      name: "Shanks",
      phone: "08517777891",
      email: "akagami.shanks@gmail.com",
    },
  ]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newContact = {
      id: new Date().getTime().toString(),
      name: name,
      phone: phone,
      email: email,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const remainContacts = contacts.filter((item) => item.id !== id);
    setContacts(remainContacts);
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      id: new Date().getTime().toString(),
      title: title,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments([...appointments, newAppointment]);
  };

  const deleteAppointment = (id) => {
    const remainAppointments = appointments.filter((item) => item.id !== id);
    setAppointments(remainAppointments);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} deleteContact={deleteContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} deleteAppointment={deleteAppointment} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
