import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./detailed.module.css"; // змінено на імпорт ES6

const Gallery1 = () => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    centerPadding: "8px",
    centerMode: false,
    className: "center",
  };

  const images = [
    { original: require("./gal1.png").default },
    { original: require("./gal2.png").default },
    { original: require("./gal3.png").default },
    { original: require("./gal4.png").default },
    { original: require("./gal5.png").default },
    { original: require("./gal6.png").default },
    { original: require("./gal7.png").default },
  ];

  const GalleryRow = () => {
    return (
      <div>
        <Slider ref={sliderRef} {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <img src={item.original} alt={`img-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div>
      <GalleryRow />
    </div>
  );
};

export default Gallery1;
