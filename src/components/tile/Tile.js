import React from "react";

export const Tile = (props) => {
  const { datum, deleteItem } = props;
  const objectKeys = Object.keys(datum);
  const handleDelete = (e) => {
    deleteItem(e.target.value);
  };
  return (
    <div className="tile-container">
      <h3 className="tile-title">{datum[objectKeys[1]]}</h3>

      {objectKeys.slice(2, objectKeys.length).map((objectKey) => (
        <p className="tile" key={objectKey}>
          {datum[objectKey]}
        </p>
      ))}

      <button className="delete-button" onClick={handleDelete} value={datum.id} type="submit">
        Delete
      </button>
    </div>
  );
};
