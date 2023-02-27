import Viewer from "react-viewer";
import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import "./ReadViewer.css";


export const ReadViewer = ({ routefile }) => {
  const [showPdf, setShowPdf] = useState(false);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blackclover.pdf`)
      .then(response => response.blob())
      .then(pdfBlob => {
        console.log(pdfBlob);
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdf({ url: pdfUrl });
      })
      .catch(error => console.log(error)); ;
  }, []);
  

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  return (
    <div>
      <button onClick={togglePdf}>
        {showPdf ? "Cerrar PDF" : "Abrir PDF"}
      </button>
      <Modal open={showPdf} onClose={togglePdf}>
        <div >
          { pdf &&
            <Viewer
              visible={true}
              onClose={() => setPdf(null)}
              images={[pdf]}
              changeable={true}
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              pageStyles={{
                canvasWrapper: {
                  boxShadow: "none",
                  maxWidth: "100%",
                  maxHeight: "100%"
                }
              }}
            />
          }
        </div>
      </Modal>
    </div>
  );
};
