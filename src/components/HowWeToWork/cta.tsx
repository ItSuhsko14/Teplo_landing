import React from "react";
let styles = require("./howwetowork.module.css");

function CTA() {
  return (
    <div className={styles.ctaContainer}>
      <a
        href="https://send.monobank.ua/jar/pAH2wwD8n"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.filledbutton}>Підтримати</div>
      </a>
      <a
        href="https://t.me/teplonaperedovu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.outlinedbutton}>Стати волонтером</div>
      </a>
    </div>
  );
}

export default CTA;
