import React from "react";
import "./App.css";
import Home from "./Home/Home";
import { items } from "./items";

const App = () => {
  fetch("../pdf/blackclover.pdf")
    .then((response) => response.blob())
    .then((pdfBlob) => {
      const reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = () => {
        const pdfBase64 = reader.result;
        localStorage.setItem("blackcloverpdf", pdfBase64);
      };
    });
  const obj = JSON.stringify(items[0]);
  localStorage.setItem("blackclover", obj);
  return <Home />;
};

export default App;
