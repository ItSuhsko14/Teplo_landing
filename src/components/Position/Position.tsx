import React, { useState, useRef } from "react";
import PositionCard from "./PositionCard";
import positions from "./positionInfo.json";
let styles = require("./position.module.css");
import leftButton from "./buttonLeft.png";
import rightButton from "./buttonRight.png";

const Position: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    { original: require("./img1.png").default },
    { original: require("./img2.png").default },
    { original: require("./img3.png").default },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + positions.length) % positions.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % positions.length);
  };

  const calculateTranslateX = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.clientWidth;
      return -(currentIndex * (sliderWidth - 26));
    }
    return 0;
  };

  console.log();

  return (
    <div className={styles.container}>
      <div className={styles.blockTitle}>Позиції допомоги</div>
      <div
        ref={sliderRef}
        className={styles.slider}
        style={{ transform: `translateX(${calculateTranslateX()}px)` }}
      >
        {positions.concat(positions).map((item, index) => (
          <div className={styles.slideContainer} key={index}>
            <PositionCard
              name={item.name}
              button={item.button}
              text={item.text}
              img={images[index % images.length].original}
            />
          </div>
        ))}
      </div>
      <div className={styles.controlContainer}>
        <img src={leftButton} alt="leftButton" onClick={handlePrevClick} />
        <img src={rightButton} alt="rightButton" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Position;
