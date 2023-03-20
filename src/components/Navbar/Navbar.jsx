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
import "./navbar.scss";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="nav_container">
      <div className="navbar">
        <a>
          <ViewModule
            className="iconsbrowser"
            onClick={(e) => {
              e.preventDefault();
              history.push("/browser");
            }}
          />
        </a>
        <Bookmark className="iconslista" />
        <a>
          <Home
            className="iconshome"
            onClick={(e) => {
              e.preventDefault();
              history.push("/home");
            }}
          />
        </a>
        <a>
          {" "}
          <Download
            className="iconsdescargas"
            onClick={(e) => {
              e.preventDefault();
              history.push("/download");
            }}
          />
        </a>
        <a>
          <AccountCircle
            className="iconsuser"
            onClick={(e) => {
              e.preventDefault();
              history.push("/profile");
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
