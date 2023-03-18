import { Search } from "@material-ui/icons";
import React from "react";
import { Logo } from "../Logo";
import "./navbarsup.scss";

export const Navbarsup = () => {
  return (
    <div className="navbarsup">
      <a href="/home"> <Logo /></a>
      <Search className="iconssearch" />
    </div>
  );
};
