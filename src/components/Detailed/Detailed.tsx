import React from "react";
let styles = require("./detailed.module.css");
import ImageGallery from "react-image-gallery";
import Gallery1 from "./Gallery1";
import "react-image-gallery/styles/css/image-gallery.css";

let rightArrow = require("./buttonLeft.png");
const images = [
  {
    original: require("./img1.png").default,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img2.png").default,
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img3.png").default,
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img4.png").default,
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img5.png").default,
    thumbnail: "https://picsum.photos/id/1019/250/150/",
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
        <div className={styles.title} id="about">
          <p>Детальніше про</p>
          <p>"Тепло на передову"</p>
        </div>
        <div className={`${styles.description} ${styles.firstDescription}`}>
          Проєкт "Тепло на передову" виник на початку повномаштабного вторгнення і спрямований на забезпечення
          захисників всім необхідним. Почавши з постачання буржуєк на фронт, він швидко розширився і охопив значно
          більший перелік позицій допомоги, включаючи кавери, м'які ноші, плащі-палатки, газові горілки та балони,
          окопні свічки та інше необхідне обладнання.
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
          Проєкт "Тепло на передову" був створений як відповідь на різкі потреби фронту під час військових дій. Він
          постачає захисникам широкий спектр необхідного обладнання, починаючи від каверів і м'яких нош до
          плащів-палаток і газових горілок. Цей проєкт є важливим елементом підтримки бойових дій і допомагає
          забезпечити комфорт і безпеку військовим у важкі часи.
        </div>
      </section>
      <Gallery1 />
    </>
  );
};

export default Detailed;
