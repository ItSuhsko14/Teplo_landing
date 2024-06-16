import React from "react";
let styles = require("./position.module.css");
import Button from "../ButtonComponent/ButtonComponent";

interface PositionCardProps {
  name: string;
  img: string;
  text: string;
  button: string;
}

const PositionCard: React.FC<PositionCardProps> = ({ name, img, text, button }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={img} alt="123" className={styles.cardImg} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardText}>{text}</p>
      <Button to="https://send.monobank.ua/jar/pAH2wwD8n" variant="filled">
        {button}
      </Button>
    </div>
  );
};

export default PositionCard;
