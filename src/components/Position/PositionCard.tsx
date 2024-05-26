import React from "react";
let styles = require("./position.module.css");

interface PositionCardProps {
  name: string;
  img: string;
  text: string;
  button: string;
}

const PositionCard: React.FC<PositionCardProps> = ({
  name,
  img,
  text,
  button,
}) => {
  return (
    <div className={styles.cardContainer}>
      <img src={img} alt="123" className={styles.cardImg} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardText}>{text}</p>
      <a
        href="https://send.monobank.ua/jar/pAH2wwD8n"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardButton}
      >
        {button}
      </a>{" "}
    </div>
  );
};

export default PositionCard;
