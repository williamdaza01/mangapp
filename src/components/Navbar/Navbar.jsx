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
      <Download className="iconsdescargas" />
      <Home className="iconshome" />
      <AccountCircle className="iconsuser" onClick={(e) => {
                e.preventDefault();
                history.push("/profile");         
              }}   />
    </div>
  );
};

export default Navbar;
