import { Box, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { ReadViewer } from "../ReadViewer/ReadViewer";
import "./item.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Item = (Items) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Box className="item-container">
        <a onClick={() => setIsOpen(true)}>
          <img src={Items.frontpage} alt="" />
        </a>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">{Items.name}</h2>
            <p id="parent-modal-description">{Items.description}</p>
            <label htmlFor="">Leer aca</label>
            <ReadViewer routefile={Items.pdf} open={false} />
          </Box>
        </Modal>
      </Box>
    </div>
  );
};
