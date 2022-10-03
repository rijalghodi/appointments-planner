import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { data, deleteItem } = props;
  return (
    <div className="tile-list">
      {data?.map((datum, index) => (
        <Tile datum={datum} deleteItem={deleteItem} key={index} />
      ))}
    </div>
  );
};
