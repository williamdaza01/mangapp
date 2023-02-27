import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Item } from "../Item/Item";
import {items} from "../../items";
import './SliderBan.css';

const MangaCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const allitems = items;
  return (
    <Slider className="slick-slider" {...settings}>
      <div className="items">
        <Item {...allitems[0]} />
      </div>
      <div className="items">
        <Item {...allitems} />
      </div>
      <div className="items">
        <Item {...allitems} />
      </div>
      <div className="items">
        <Item {...allitems} />
      </div>
      <div className="items">
        <Item {...allitems} />
      </div>
    </Slider>
  );
};

export default MangaCarousel;
