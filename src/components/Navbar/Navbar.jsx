import { AccountCircle, Bookmark, Search } from "@material-ui/icons";
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
      <div className="container">
        <div className="left">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <div className="right">
          <Search className="icons" />
          <Bookmark className="icons" />
          <Download className="icons" />
          <AccountCircle className="icons" onClick={handleOpen} />
          <div>
            <Modal open={open} onClose={() => setOpen(false)}>
              <div className="modal">
                <Profile {...profile} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
