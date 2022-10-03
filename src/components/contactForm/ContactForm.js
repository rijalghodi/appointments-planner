import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="#name-input">Title</label>
      <input id="name-input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <div className="flex">
        <div className="form-section">
          <label htmlFor="#phone-input">Phone Number</label>
          <input id="phone-input" type="number" name="phone" pattern="08\d{8,10}$" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-section">
          <label htmlFor="#email-input">Email</label>
          <input id="email-input" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <button id="submit" type="submit">
        Add
      </button>
    </form>
  );
};
