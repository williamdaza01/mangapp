import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Items } from "../../items";
import { Item } from "../Item/Item";
import Navbar from "../Navbar/Navbar";
import { Navbarsup } from "../Navbar/navbarsup";
import "./browser.scss";

export function Browser() {
  const history = useHistory();
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
      <Navbarsup />
      <div className="filter">
        <label htmlFor="filtro">Filtrar por:</label>
        <select id="filtro" onChange={handleFiltroChange}>
          <option value="todos">Todos</option>
          <option value="Shonen">Shonen</option>
          <option value="Seinen">Seinen</option>
          <option value="Spokon">Spokon</option>
        </select>
      </div>
      <div className="items_container">
        {filteredItems.map((item) => (
          <div className="item" key={item.id}>
            <Item {...item}></Item>
          </div>

        ))}
      </div>
      <Navbar></Navbar>
    </div>
  );
}
