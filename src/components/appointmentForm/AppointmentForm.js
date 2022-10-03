import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({ contacts, title, setTitle, contact, setContact, date, setDate, time, setTime, handleSubmit }) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const onChange = (e) => setContact(e.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className="flex">
        <div className="form-section">
          <label htmlFor="date-input">Date</label>
          <input id="date-input" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()} />
        </div>
        <div className="form-section">
          <label htmlFor="time-input">Time</label>
          <input id="time-input" type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <ContactPicker contacts={contacts} onChange={onChange} />
      </div>
      <button id="submit" type="submit">
        Add
      </button>
    </form>
  );
};
