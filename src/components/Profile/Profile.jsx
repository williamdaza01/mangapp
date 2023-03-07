import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { Navbarsup } from "../Navbar/navbarsup";
import bluelock from "../../assets/images/bluelock.jpg";

export const Profile = () => {
  const history = useHistory();
  const name = localStorage.getItem("nombreData") + localStorage.getItem("apellidoData");
  const email = localStorage.getItem("apellidoData");
  const phone = "2000000";
  const photo = localStorage.getItem("photo");

  return (
    <div className="home">
      <Navbarsup>
        <ArrowBackIos
          className="iconsarrowback"
          onClick={() => history.push("/home")}
        ></ArrowBackIos>
      </Navbarsup>
      <div className="profile">
        <img className="profileimg" src={bluelock} alt="Profile" />
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
      <Navbar></Navbar>
    </div>
  );
};
