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
      <div className="container-carousel">
        <label className="label_carousel">Populares</label>
        <div className="populares">
          <MangaCarousel />
        </div>
      </div>
      <br />
      <div className="container-carousel">
        <label className="label_carousel">Mas Recientes</label>
        <div className="masrecientes">
          <MangaCarouselmasrecientes />
        </div>
      </div>
      <br />
      <div className="container-carousel">
        <label className="label_carousel" htmlFor="">Top Shonen</label>
        <div className="topshonen">
          <MangaCarousel />
        </div>
      </div>
      <Navbar />
    </div>
  );
};
