import { Box } from "@material-ui/core";
import "./item.scss";
import { useHistory } from "react-router-dom";
import React from 'react'


export const Item = (Items) => {
  const history = useHistory();
  return (
    <div>
      <Box className="item-container">
        <a onClick={() => history.push(Items.ruta)}>
          <img src={Items.frontpage} alt="" />
        </a>
        <label>{Items.name}</label>
      </Box>
    </div>
  );
};
