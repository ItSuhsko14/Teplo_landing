import React from "react";
let styles = require("./detailed.module.css");
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "img1.png",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

interface DetailedProps {}

const Detailed: React.FC<DetailedProps> = ({}) => {
  return (
    <section className={styles.container}>
      <div className={styles.title} id="about">
        <p>Детальніше про проєкт</p>
        <p>"Тепло на передову"</p>
      </div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Feugiat euismod sit odio in.
        Diam quam condimentum ultrices in. Magna in consequat lacus neque
        scelerisque ut tempor purus. Accumsan a mauris lacus vulputate nulla
        condimentum massa sed lectus. Eu ut ipsum sit pretium magna. Sapien amet
        purus proin massa ipsum nunc ultrices auctor. Porttitor blandit at orci
        blandit fermentum neque sapien enim. Tristique donec adipiscing semper
        lacus adipiscing. Massa adipiscing euismod duis velit sed volutpat leo
        tellus. Faucibus nisl cras nullam auctor tincidunt bibendum.
        Sollicitudin turpis lectus enim volutpat. Mauris varius id interdum
        venenatis euismod nunc nunc ac amet. Pharetra in nullam at velit neque
        id purus. Aliquet felis risus viverra magna condimentum aenean. Natoque
        feugiat euismod sapien in vulputate. Arcu dui faucibus nunc euismod orci
        tempor enim egestas. Est nisi eget donec libero eget vel feugiat nam.
        Urna sapien faucibus feugiat et integer dictum mauris urna. Aliquam
        semper a diam laoreet magna neque maecenas. Turpis posuere bibendum nunc
        at adipiscing diam euismod. Ipsum molestie nulla volutpat proin quis
        platea sed ut. Id bibendum varius lorem pretium sagittis et turpis.
      </div>
      <div className={styles.photoSlider}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
          originalClass={styles.galleryImage}
          thumbnailPosition="bottom"
        />
      </div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Feugiat euismod sit odio in.
        Diam quam condimentum ultrices in. Magna in consequat lacus neque
        scelerisque ut tempor purus. Accumsan a mauris lacus vulputate nulla
        condimentum massa sed lectus. Eu ut ipsum sit pretium magna. Sapien amet
        purus proin massa ipsum nunc ultrices auctor. Porttitor blandit at orci
        blandit fermentum neque sapien enim. Tristique donec adipiscing semper
        lacus adipiscing. Massa adipiscing euismod duis velit sed volutpat leo
        tellus. Faucibus nisl cras nullam auctor tincidunt bibendum.
        Sollicitudin turpis lectus enim volutpat. Mauris varius id interdum
        venenatis euismod nunc nunc ac amet. Pharetra in nullam at velit neque
        id purus. Aliquet felis risus viverra magna condimentum aenean. Natoque
        feugiat euismod sapien in vulputate. Arcu dui faucibus nunc euismod orci
        tempor enim egestas. Est nisi eget donec libero eget vel feugiat nam.
        Urna sapien faucibus feugiat et integer dictum mauris urna. Aliquam
        semper a diam laoreet magna neque maecenas. Turpis posuere bibendum nunc
        at adipiscing diam euismod. Ipsum molestie nulla volutpat proin quis
        platea sed ut. Id bibendum varius lorem pretium sagittis et turpis.
      </div>

      <div className={styles.buttonDetailed}>Детальніше</div>
    </section>
  );
};

export default Detailed;
