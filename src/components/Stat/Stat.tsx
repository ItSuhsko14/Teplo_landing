import React from "react";
let styles = require("./stat.module.css");

interface StatProps {}

const Stat: React.FC<StatProps> = ({}) => {
  return (
    <section className={styles.container} id="stat">
      <div className="blockTitle">Наші досягнення</div>
      <div className={`${styles.block} ${styles.background1}`}>
        <div className={styles.number}>300+</div>
        <div className={styles.name}>Закритих запитів</div>
      </div>
      <div className={`${styles.block} ${styles.background2}`}>
        <div className={styles.number}>23</div>
        <div className={styles.name}>Військові підрозділи</div>
      </div>
      <div className={`${styles.block} ${styles.background3}`}>
        <div className={styles.number}>40+</div>
        <div className={styles.name}>Постійні донатери</div>
      </div>
    </section>
  );
};

export default Stat;
