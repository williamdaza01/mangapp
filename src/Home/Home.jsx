import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MangaCarousel from "../components/Slider/SliderBan";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container-carousel">
        <label>Populares</label>
        <div>
          <MangaCarousel />
        </div>
      </div>
      <br />
      <div className="container-carousel">
        <label htmlFor="">Mas Recientes</label>
      </div>
      <br />
      <div className="container-carousel">
        <label htmlFor="">Top Shonen</label>
      </div>
    </div>
  );
};
