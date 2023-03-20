import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Navbarsup } from "../Navbar/navbarsup";
import { Items } from "../../items";
import "./Busqueda.scss";
import { Item } from "../Item/Item";

export const Busqueda = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    const results = Items.filter((Items) =>
      Items.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredResults(results);
  };
  return (
    <div className="home">
      <Navbarsup />
      <div className="search_container">
        <TextField
          variant="outlined"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearchSubmit}
        >
          Buscar
        </Button>
      </div>
      <div className="">
        <div className="resultus_container">
          {filteredResults.map((result) => (
            <div key={result.id}>
              <Item {...result}></Item>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};
