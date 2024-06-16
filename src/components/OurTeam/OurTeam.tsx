import React, { useState, useRef } from "react";
import TeamCard from "./TeamCard";
import Button from "../ButtonComponent/ButtonComponent";
import team from "./team.json";
let styles = require("./ourTeam.module.css");
import leftButton from "./buttonLeft.png";
import rightButton from "./buttonRight.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const OurTeam: React.FC = () => {
  let sliderRef = useRef<Slider | null>(null);

  const images = [
    { original: require("./img1.png").default },
    { original: require("./img1.png").default },
    { original: require("./img1.png").default },
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
    <div className={styles.container} id="team">
      <div className={styles.blockTitle}>Наша команда</div>
      <div className={styles.mainText}>
        Lorem ipsum dolor sit amet consectetur. In quam ac cras pretium lobortis. Aliquet lacus morbi ut enim. Lorem
        ipsum dolor sit amet consectetur. In quam ac cras pretium lobortis. Lorem ipsum dolor sit amet consectetur. In
        quam ac cras pretium lobortis. Aliquet lacus morbi ut enim.
      </div>

      <Slider ref={sliderRef} {...settings}>
        {team.map((item: { name: string; button: string; text: string }, index: number) => (
          <div className={styles.slideContainer} key={index}>
            <TeamCard
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
      <div className={styles.CTA}>Приєднуйтесь до нашого волонтерського руху!</div>
      <div className={styles.buttonContainer}>
        <Button to="" variant="filled">
          Стати волонтером
        </Button>
      </div>
    </div>
  );
};

export default OurTeam;
