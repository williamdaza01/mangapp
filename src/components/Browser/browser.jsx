import React, { useState } from "react";
import { Items } from "../../items";
import Navbar from "../Navbar/Navbar";
import { Navbarsup } from "../Navbar/navbarsup";
import "./browser.css";

export function Browser() {
  const [category, setCategory] = useState("todos");

  const handleFiltroChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredItems =
    category === "todos"
      ? Items
      : Items.filter((item) => item.categoria === category);

  return (
    <div className="home">
      <div>
        <label htmlFor="filtro">Filtrar por:</label>
        <select id="filtro" onChange={handleFiltroChange}>
          <option value="todos">Todos</option>
          <option value="Shonen">Shonen</option>
          <option value="Seinen">Seinen</option>
          <option value="Spokon">Spokon</option>
        </select>
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <img src={item.frontpage} alt={item.name} />
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>
      <Navbar></Navbar>
    </div>
  );
}
