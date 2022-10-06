import React, { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
export const AppointmentsPage = (props) => {
  /*
  Define state variables for appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const { appointments, addAppointment, deleteAppointment, contacts } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
      Add appointment info and clear data  
      */
    if (!isEmpty) {
      addAppointment(title, contact, date, time);
      setTitle("");
      // setContact("");
      setDate("");
      setTime("");
      setIsEmpty(true);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    setIsEmpty(true);
    if (title && contact && date && time) {
      setIsEmpty(false);
    }
  }, [title, contact, date, time]);

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} title={title} setTitle={setTitle} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} deleteItem={deleteAppointment} />
      </section>
    </div>
  );
};
