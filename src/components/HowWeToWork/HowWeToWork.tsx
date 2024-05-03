import React from 'react'
let styles = require('./howwetowork.module.css')
import CTA from './cta';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img5 from './img5.png';


const HowWeToWork = () => {
  return (
    <div>
      <div className={styles.container}>

        <div className="title darkColor">
            Ковертуємо донати в перемогу
        </div>
        <div className={styles.stepsContainer}>
                
                <div className={styles.stepTitle}>
                    Отримуємо <b>запит</b> від військових
                </div>
                <div className={`${styles.stepItem} ${styles.leftArrow}`}>
                    <img src={img1} alt='img1'/>
                </div>            
                <div className={styles.stepTitle}>
                <b>Збираємо</b> кошти через донат
                </div>
                <div className={`${styles.stepItem} ${styles.rightArrow}`}>
                    <img src={img2} alt='img1'/>
                </div>            
                <div className={styles.stepTitle}>
                    <b>Закуповуємо та виготовляємо</b> необхідне
                </div>
                <div className={`${styles.stepItem} ${styles.leftArrow}`}>
                    <img src={img3} alt='img1'/>
                </div>            
                <div className={styles.stepTitle}>
                    <b>Передаємо</b> допомогоу військовим
                </div>
                <div className={`${styles.stepItem} ${styles.rightArrow}`}>
                    <img src={img3} alt='img1'/>
                </div>            
                <div className={styles.stepTitle}>
                    Обов'язковий <b>звіт</b>
                </div>
                <div className={`${styles.stepItem}`}>
                    <img src={img5} alt='img1'/>
                </div>            
                
            </div>

      </div>
      <CTA />
    </div>
  )
}

export default HowWeToWork
