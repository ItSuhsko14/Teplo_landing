import React from "react";
let styles = require("./footer.module.css");
import logo from "./logo.png";
import instagram from "./instagram.png";
import telegram from "./telegram.png";
import facebook from "./facebook.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.cta}>Зробити донат</div>
      <div className={styles.ancors}>
        <div className={styles.email}>Email: teplonaperedovu@gmail.com</div>
        <div className={styles.socialLinks}>
          <div className={styles.socTitle}>Ми в соціальних мережах</div>
          <div className={styles.socIcons}>
            <img src={instagram} alt="instagram" className={styles.socIcon} />
            <img src={telegram} alt="telegram" className={styles.socIcon} />
            <img src={facebook} alt="facebook" className={styles.socIcon} />
          </div>
        </div>
      </div>

      <div className={styles.ancors}>
        <div className={styles.admin}>Команда розробки</div>
        <div className={styles.admin}>Адміністративна панель</div>
      </div>
    </div>
  );
};

export default Footer;
