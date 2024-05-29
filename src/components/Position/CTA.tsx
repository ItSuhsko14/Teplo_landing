import React from "react";
let styles = require("./position.module.css");

const CTA = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaText}>Якщо Ви потребуєте нашої допомоги, залишайте СВІЙ ЗАПИТ</div>
      <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
        <div className={styles.filledbutton}>Створити запит</div>
      </a>
    </div>
  );
};

export default CTA;
