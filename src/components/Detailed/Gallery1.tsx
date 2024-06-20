import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let styles = require("./detailed.module.css");

const Gallery1 = () => {
  let sliderRef = useRef(null);

  const images = [
    { original: require("./gal1.png").default },
    { original: require("./gal2.png").default },
    { original: require("./gal3.png").default },
    { original: require("./gal4.png").default },
    { original: require("./gal5.png").default },
    { original: require("./gal6.png").default },
    { original: require("./gal7.png").default },
  ];

  const images2 = [
    { original: require("./gal3.png").default },
    { original: require("./gal4.png").default },
    { original: require("./gal5.png").default },
    { original: require("./gal6.png").default },
    { original: require("./gal7.png").default },
    { original: require("./gal1.png").default },
    { original: require("./gal1.png").default },
  ];

  const GalleryRow = ({
    photos,
    settings,
    rtl = false,
  }: {
    photos: { original: string }[];
    settings: any;
    rtl?: boolean;
  }) => {
    return (
      <div>
        <Slider ref={sliderRef} {...settings} rtl={rtl}>
          {photos.map((item, index) => (
            <div key={index}>
              <img src={item.original} alt={`img-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className={styles.galleryContainer}>
      <GalleryRow photos={images} settings={settings} />
      <GalleryRow photos={images2} settings={settings} rtl={true} />
      <GalleryRow photos={images} settings={settings} />
    </div>
  );
};

export default Gallery1;
