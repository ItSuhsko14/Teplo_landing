import React from "react";
let styles = require("./hero.module.css");
import Button from "../ButtonComponent/ButtonComponent";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>ТЕПЛО НА ПЕРЕДОВУ</div>
      <div className={styles.title}>Станьте частиною перемоги!</div>
      <div className={styles.description}>
        Наша діяльність спрямована на допомогу захисникам і захисницям України на передовій. Ми допомагаємо як окремим
        військовим, так і підрозділам.
      </div>
      <div className={styles.buttoncontainer}>
        {/* <a
          href="https://send.monobank.ua/jar/pAH2wwD8n"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        {/* <button className={styles.filledbutton}>Підтримати</button> */}
        <Button to="" variant="filled">
          Підтримати
        </Button>
        <Button to="" variant="outlined">
          Потрібна допомога
        </Button>
        {/* </a> */}
        {/* <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer"> */}
        {/* <button className={styles.outlinedbutton}>Потрібна допомога</button> */}
        {/* </a> */}
      </div>
    </section>
  );
};

export default Hero;
