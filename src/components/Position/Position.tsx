import React, { useState, useRef } from "react";
import PositionCard from "./PositionCard";
import positions from "./positionInfo.json";
let styles = require("./position.module.css");
import leftButton from "./buttonLeft.png";
import rightButton from "./buttonRight.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import CTA from "./CTA";

const Position: React.FC = () => {
  let sliderRef = useRef(null);

  const images = [
    { original: require("./img1.png").default },
    { original: require("./img2.png").default },
    { original: require("./img3.png").default },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    centerPadding: "8px",
    centerMode: true,
    className: "center",
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <>
      <div className={styles.container} id="position">
        <div className={styles.blockTitle}>Позиції допомоги</div>

        <Slider ref={sliderRef} {...settings}>
          {positions.map((item, index) => (
            <div className={styles.slideContainer} key={index}>
              <PositionCard
                name={item.name}
                button={item.button}
                text={item.text}
                img={images[index % images.length].original}
              />
            </div>
          ))}
        </Slider>
        <div className={styles.controlContainer}>
          <img src={leftButton} alt="leftButton" onClick={previous} />
          <img src={rightButton} alt="rightButton" onClick={next} />
        </div>
      </div>
      <CTA />
    </>
  );
};

export default Position;