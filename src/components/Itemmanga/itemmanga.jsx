import React from 'react'
import { Box } from "@material-ui/core";
import "../Item/item.css";
import "./itemmanga.css";

export const ItemManga = (Items) => {
  return (
    <div>
      <Box className="item-container">
        <h2 className="name">{Items.name}</h2>
        <img className="imgmanga" src={Items.image} alt="" />
        <p className="descripcion">{Items.description}</p>
      </Box>
    </div>
  );
};
