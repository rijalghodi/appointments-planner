import React from "react";

export const ContactPicker = (props) => {
  const { contact, contacts, onChange } = props;
  return (
    <div className="form-section">
      <label htmlFor="#select-contact">Contact</label>
      <select id="select-contact" name="select-contact" onChange={onChange}>
        <option value=""></option>
        {contacts?.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </div>
  );
};
