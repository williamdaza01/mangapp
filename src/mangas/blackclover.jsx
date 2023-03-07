import React from 'react'
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./blackclover.css";
import { ItemManga } from "../components/Itemmanga/itemmanga";
import { Items } from "../items";

export const Blackcover = () => {
  const history = useHistory();
  const allitems = Items;

  return (
    <div className="home">
      <ArrowBackIos
        className="iconsarrowback"
        onClick={() => history.push("/home")}
      ></ArrowBackIos>
      <div>
        <ItemManga {...allitems[0]} />
      </div>
    </div>
  );
};
