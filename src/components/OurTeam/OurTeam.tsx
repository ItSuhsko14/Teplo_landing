import React, { useState, useRef } from "react";
import TeamCard from "./TeamCard";
import Button from "../ButtonComponent/ButtonComponent";
let team = require("./team.json");
let styles = require("./ourTeam.module.css");
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import ButtonLeftRight from "../ButtonComponent/ButtonsLeftRight";

const OurTeam: React.FC = () => {
  let sliderRef = useRef<Slider | null>(null);

  const images = [
    { original: require("./img01.jpg").default },
    { original: require("./img02.jpg").default },
    { original: require("./img03.jpg").default },
    { original: require("./img04.jpg").default },
    { original: require("./img05.jpg").default },
    { original: require("./img06.jpg").default },
    { original: require("./img07.png").default },
    { original: require("./img08.jpg").default },
    { original: require("./img09.jpg").default },
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
    centerPadding: "32px",
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
      <div className="title darkColor">Наша команда</div>
      <div className={styles.mainText}>
        Наша команда - це люди, які прагнуть зробити свій внесок і не залишатися осторонь. Вони транспортують,
        виготовляють, шиють, готують, вкладають власні кошти та роблять усе, щоб наблизити нашу перемогу. Ви можете
        приєднатися до нас, поділившись інформацією, присвятивши свій час або зробивши (фінансовий) внесок.
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
        <ButtonLeftRight direction={"left"} onClick={previous} />
        <ButtonLeftRight direction={"right"} onClick={next} />{" "}
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
