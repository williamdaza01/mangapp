import {
  AccountCircle,
  Bookmark,
  Search,
  Home,
  ViewModule,
} from "@material-ui/icons";
import { Download } from "@mui/icons-material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <ViewModule className="iconsbrowser" />
      <Bookmark className="iconslista" />
      <a> <Download className="iconsdescargas" onClick={(e) => {
                e.preventDefault();
                history.push("/download");         
              }}  /></a>
      <a><Home className="iconshome" onClick={(e) => {
                e.preventDefault();
                history.push("/home");         
              }}  /></a>
      <a><AccountCircle className="iconsuser" onClick={(e) => {
                e.preventDefault();
                history.push("/profile");         
              }}   /></a>
    </div>
  );
};

export default Navbar;
