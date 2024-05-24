import React from "react";
import PositionCard from "./PositionCard";
let positions = require("./positionInfo.json");
let styles = require("./position.module.css");
import leftButton from "./buttonLeft.png";
import rightButton from "./buttonRight.png";

function Position() {
  const images = [
    { original: require("./img1.png").default },
    { original: require("./img2.png").default },
    { original: require("./img1.png").default },
    { original: require("./img1.png").default },
    { original: require("./img1.png").default },
  ];

  return (
    <div className="container">
      <div className={styles.blockTitle}>Позиції допомоги</div>
      {positions.map((item, index) => (
        <PositionCard
          key={index}
          name={item.name}
          button={item.button}
          text={item.text}
          img={images[index].original}
        />
      ))}
      <div className={styles.controlContainer}>
        <img src={leftButton} alt="leftButton" />
        <img src={rightButton} alt="rightButton" />
      </div>
    </div>
  );
}

export default Position;
