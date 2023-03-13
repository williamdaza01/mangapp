import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { Item } from "../Item/Item";
import { Items } from "../../items";

const MangaCarousel = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const allitems = Items;
  return (
    <Slider className="slick-slider" {...settings}>
      <div>
        <Item {...allitems[0]} />
      </div>
      <div>
        <Item {...allitems[1]} />
      </div>
      <div>
        <Item {...allitems[2]} />
      </div>
      <div>
        <Item {...allitems[3]} />
      </div>
      <div>
        <Item {...allitems[4]} />
      </div>
    </Slider>
  );
};

export default MangaCarousel;
