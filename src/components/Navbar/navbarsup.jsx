import { Search } from "@material-ui/icons";
import React from "react";
import { Logo } from "../Logo";
import "./navbarsup.css";

export const Navbarsup = () => {
  return (
    <div className="navbarsup">
      <Logo />
      <Search className="iconssearch" />
    </div>
  );
};
