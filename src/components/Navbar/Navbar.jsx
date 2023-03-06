import {
  AccountCircle,
  Bookmark,
  Search,
  Home,
  ViewModule,
} from "@material-ui/icons";
import { Download } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import Logo from "../Logo";
import { Profile } from "../Profile/Profile";
import "./navbar.css";

const Navbar = () => {
  const profile = {
    photo: "https://example.com/photo.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="navbar">
      <ViewModule className="iconsbrowser" />
      <Bookmark className="iconslista" />
      <Download className="iconsdescargas" />
      <Home className="iconshome" />
      <AccountCircle className="iconsuser" onClick={handleOpen} />
      <div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="modal">
            <Profile {...profile} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
