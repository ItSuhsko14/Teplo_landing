import React from "react";
let styles = require("./monobank.module.css");
import jar from "./jar.png";

const Monobank = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Банка Монобанк</div>
      <div className={styles.main}>
        <div className={styles.jar}>
        
        </div>
        <div className={styles.desctiption}>
          <div className={styles.headline}>Наближаємо перемогу разом!</div>
          <div className={styles.text}>Наша тижнева мета - 60 000 грн.</div>
          <div className={styles.cta}>Поповнити банку</div>
        </div>
      
      </div> 
      <div className={styles.progressBarContainer} >
        
      
      </div> 
      <div className={styles.progressBarContainer} >
        
      </div>
    </div>
  );
};

export default Monobank;
