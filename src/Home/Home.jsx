import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Navbarsup } from "../components/Navbar/navbarsup";
import MangaCarousel from "../components/Slider/SliderBan";
import { MangaCarouselmasrecientes } from "../components/Slider/masrecientes";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbarsup />
      <Navbar />
      <div className="container-carousel1">
        <label>Populares</label>
        <div className="populares">
          <MangaCarousel />
        </div>
      </div>
      <br />
      <div className="container-carousel2">
        <label>Mas Recientes</label>
        <div className="masrecientes">
          <MangaCarouselmasrecientes />
        </div>
      </div>
      <br />
      <div className="container-carousel3">
        <label htmlFor="">Top Shonen</label>
        <div className="topshonen">
          <MangaCarousel />
        </div>
      </div>
    </div>
  );
};
