import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.scsss";
import "slick-carousel/slick/slick-theme.scsss";
import { Item } from "../Item/Item";
import { Items } from "../../items";

export const MangaCarouselmasrecientes = () => {
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
        <Item {...allitems[5]} />
      </div>
      <div>
        <Item {...allitems[6]} />
      </div>
      <div>
        <Item {...allitems[7]} />
      </div>
      <div>
        <Item {...allitems[8]} />
      </div>
      <div>
        <Item {...allitems[9]} />
      </div>
    </Slider>
  );
};
