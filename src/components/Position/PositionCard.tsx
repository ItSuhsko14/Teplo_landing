import React from "react";
let styles = require("./position.module.css");
import img from "./img1.png";

// Визначаємо інтерфейс для пропсів компонента
interface PositionCardProps {
  name: string;
  img: string;
  text: string;
  button: string;
}

// Приймаємо пропси в компоненті і типізуємо їх за допомогою PositionCardProps
const PositionCard: React.FC<PositionCardProps> = ({
  name,
  img,
  text,
  button,
}) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <img src={img} alt="123" className={styles.cardImg} />
      <p className={styles.cardText}>{text}</p>
      <button className={styles.cardButton}>{button}</button>
    </div>
  );
};

export default PositionCard;
