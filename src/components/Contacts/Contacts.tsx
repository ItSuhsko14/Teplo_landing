import React from "react";
let styles = require("./contacts.module.css");
import telegram from "./telegram.png";
import fb_messenger from "./fb_messenger.png";
import instagram from "./instagram.png";
import gmail from "./gmail.png";

const Contacts = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          Будьте з нами на зв’язку! Приєднуйтесь до наших соціальних мереж, спостерігайте за життям нашого
          волонтерського руху та ставайте його частиною!
        </div>
        <div className={styles.buttonsContainer}>
          <img src={instagram} alt="instagram" className={styles.button} />
          <img src={telegram} alt="telegram" className={styles.button} />
          <img src={fb_messenger} alt="fb_messenger" className={styles.button} />
          <img src={gmail} alt="gmail" className={styles.button} />
        </div>
      </div>
      <div className={styles.cta}>
        Допоможіть нашій справі! {<br />}
        {<br />}Навіть найменший донат або репост - це вже велика допомога. Зробіть репост, щоб більша кількість людей
        побачила наш збір, і ми мали можливість швидше надавати підтримку нашим військовим!
      </div>
    </>
  );
};

export default Contacts;
