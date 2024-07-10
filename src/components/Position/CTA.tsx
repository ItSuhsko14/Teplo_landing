import React from "react";
let styles = require("./position.module.css");
import Button from "../ButtonComponent/ButtonComponent";

const CTA = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaText}>Якщо Ви потребуєте нашої допомоги, залишайте СВІЙ ЗАПИТ</div>
      <a href="https://t.me/teplonaperedovu" className={styles.CTAbutton}>
        Створити запит
      </a>
    </div>
  );
};

export default CTA;
