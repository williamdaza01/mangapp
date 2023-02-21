import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Item } from '../Item/Item';

const MangaCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider className="slick-slider" {...settings}>
      <div>
        <Item/>
      </div>
      <div>
        <h3>Movie 2</h3>
        <img src="https://via.placeholder.com/150" alt="Movie 2" />
      </div>
      <div>
        <h3>Movie 3</h3>
        <img src="https://via.placeholder.com/150" alt="Movie 3" />
      </div>
      <div>
        <h3>Movie 4</h3>
        <img src="https://via.placeholder.com/150" alt="Movie 4" />
      </div>
      <div>
        <h3>Movie 5</h3>
        <img src="https://via.placeholder.com/150" alt="Movie 5" />
      </div>
    </Slider>
  );
};

export default MangaCarousel;
