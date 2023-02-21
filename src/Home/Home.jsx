import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MangaCarousel from "../components/Slider/SliderBan";
import "./home.css";

const Home = () => {
  return (
    
      <div className="home">
        <Navbar />
        <MangaCarousel/>
      </div>
  );
};

export default Home;
