import React from "react";
let styles = require("./monobank.module.css");
import jar from "./jar.png";

const Monobank = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pattern} />
      <div className={styles.title}>Банка Монобанк</div>
      <div className={styles.main}>
        <div className={styles.jar}>
          <img src={jar} alt="jar" />
        </div>
        <div className={styles.description}>
          <div className={styles.headline}>Наближаємо перемогу разом!</div>
          <div className={styles.text}>Наша тижнева мета - 60 000 грн.</div>
          <div className={styles.cta}>Поповнити банку</div>
        </div>
      </div>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}></div>
        <div className={styles.progressText}>
          <div className={styles.start}>0</div>
          <div className={styles.current}>20 000</div>
          <div className={styles.end}>60 000</div>
        </div>
      </div>
    </div>
  );
};

export default Monobank;
