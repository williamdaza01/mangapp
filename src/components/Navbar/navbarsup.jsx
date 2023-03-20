import { Search } from "@material-ui/icons";
import React from "react";
import { Logo } from "../Logo";
import { useHistory } from "react-router-dom";
import "./navbarsup.scss";

export const Navbarsup = () => {
  const history = useHistory();
  return (
    <div className="navsupcont">
      <div className="navbarsup">
        <a href="/home" className="logohome">
          {" "}
          <Logo />
        </a>
        <Search
          className="iconssearch"
          onClick={(e) => {
            e.preventDefault();
            history.push("/busqueda");
          }}
        />
      </div>
    </div>
  );
};
