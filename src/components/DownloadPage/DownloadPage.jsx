import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Navbarsup } from "../Navbar/navbarsup";
import { useHistory } from "react-router-dom";

export const DownloadPage = () => {
  const history = useHistory();
  return (
    <div className="home">
      <Navbarsup>
        <ArrowBackIos
          className="iconsarrowback"
          onClick={() => history.push("/home")}
        ></ArrowBackIos>
      </Navbarsup>
      <Navbar></Navbar>
    </div>
  );
};
