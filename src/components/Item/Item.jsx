import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./item.css";

export const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item-container">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal show={isOpen} />
    </div>
  );
};
