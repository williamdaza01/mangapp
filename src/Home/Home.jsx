import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MangaCarousel from "../components/Slider/SliderBan";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container-carousel">
        <label htmlFor="">Populares</label>
        <MangaCarousel />
      </div>
      <br />
      <div className="container-carousel">
        <label htmlFor="">Mas Recientes</label>
        <MangaCarousel />
      </div>
      <br />
      <div className="container-carousel">
        <label htmlFor="">Top Shonen</label>
        <MangaCarousel />
      </div>
    </div>
  );
};

export default Home;