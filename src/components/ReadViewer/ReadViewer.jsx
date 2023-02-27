import Viewer from "react-viewer";
import { Modal } from "@material-ui/core";
import React, { useState } from "react";

export const ReadViewer = ({ routefile }) => {
  const [visible, setVisible] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };
  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };


  const obj = localStorage.getItem("blackcloverpdf");
  

  return (
    <div>
      <button onClick={togglePdf}>
        {showPdf ? "Cerrar PDF" : "Abrir PDF"}
      </button>
      <Modal open={showPdf} onClose={togglePdf}>
        <div>
          <button onClick={handleOpen}>Abrir PDF</button>
          <Viewer
            visible={visible}
            onClose={handleClose}
            images={[{ src: {obj}, alt: "" }]}
          />
        </div>
      </Modal>
    </div>
  );
};
