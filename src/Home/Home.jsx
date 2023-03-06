import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Navbarsup } from "../components/Navbar/navbarsup";
import MangaCarousel from "../components/Slider/SliderBan";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Navbarsup />
      <Navbar />
      <div className="container-carousel1">
        <label>Populares</label>
        <MangaCarousel />
      </div>
      <br />
      <div className="container-carousel2">
        <label htmlFor="">Mas Recientes</label>
        <MangaCarousel />
      </div>
      <br />
      <div className="container-carousel3">
        <label htmlFor="">Top Shonen</label>
        <MangaCarousel />
      </div>
    </div>
  );
};
