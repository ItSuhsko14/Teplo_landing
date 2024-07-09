import React from "react";
let styles = require("./detailed.module.css");
import ImageGallery from "react-image-gallery";
import Gallery1 from "./Gallery1";
import "react-image-gallery/styles/css/image-gallery.css";

let rightArrow = require("./buttonLeft.png");

const images = [
  {
    original: require("./img01.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img02.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img03.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img04.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img05.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img06.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img07.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img08.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img09.jpg").default,
    originalHeight: 258,
    originalWidth: 342,
  },
];

interface DetailedProps {}

const Detailed: React.FC<DetailedProps> = ({}) => {
  const renderRightNav = (onClick: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean) => {
    return (
      <button className={`${styles.navButton} ${styles.rightNav}`} onClick={onClick} disabled={disabled}>
        <img src={rightArrow} alt="Right" />
      </button>
    );
  };

  return (
    <>
      <section className={styles.container} id="detailed">
        <div className="title darkColor" id="about">
          <p>Детальніше про</p>
          <p>"Тепло на передову"</p>
        </div>
        <div className={`${styles.description} ${styles.firstDescription}`}>
          Проєкт "Тепло на передову" був заснований Артемом Рубаном у перші тижні повномасштабного вторгнення. Він виник
          з метою надання необхідної підтримки захисникам у складний період. Почавши з постачання буржуйок на фронт,
          проєкт швидко розширився, охопивши широкий спектр необхідного обладнання. Сьогодні "Тепло на передову"
          постачає військовим кавери, м'які ноші, плащі-палатки, газові горілки та балони, а також інше обладнання,
          необхідне для комфорту і безпеки на передовій.
        </div>
      </section>
      <div className={styles.photoSlider}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
          thumbnailPosition="bottom"
          additionalClass={styles.customImageGallery}
          showFullscreenButton={false}
          autoPlay={true}
          renderRightNav={renderRightNav}
        />
      </div>
      <section className={styles.container}>
        <div className={`${styles.description} ${styles.secondDescription}`}>
          У пошуках способів допомогти, Артем Рубан відвідав багато волонтерських центрів, проте через хаос і
          невизначеність на самому початку конфлікту вирішив самостійно організувати допомогу. Початково основним
          напрямком стали буржуйки, які забезпечували тепло та зручність в умовах передової. Протягом часу були створені
          різні модифікації, що враховували специфіку експлуатації і побажання бійців, але з появою дронів їх
          використання стало небезпечним, і фокус змінився на доставку іншого необхідного обладнання, такого як газові
          пальники, балони та окопні свічки. З розвитком проєкту збільшувалась кількість позицій допомоги: з'явились
          м'які ноші, кавери для шоломів, плащі-палатки, лопати та спальні мішки. Разом із зростанням чисельності
          команди і кількістю постійних донатерів, проєкт став працювати на постійній основі, щотижнево забезпечуючи
          військових актуальною та необхідною допомогою.
        </div>
      </section>
      <Gallery1 />
    </>
  );
};

export default Detailed;
