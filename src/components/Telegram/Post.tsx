import React, { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
let styles = require("./telegram.module.css");

interface ImageData {
  download_url: string;
  width: number;
  height: number;
  isSelected: boolean;
  caption: string;
  className: string;
}

const Post: React.FC<{ text: string }> = ({ text }) => {
  const [listOfImages, setListOfImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        return response.json();
      })
      .then((data) => setListOfImages(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const images = listOfImages.map((imageData, index) => {
    return {
      src: imageData.download_url,
      width: imageData.width,
      height: imageData.height,
      isSelected: false,
      caption: `Image ${index}`,
      className: styles.galleryImage,
    };
  });

  return (
    <div className={styles.postContainer}>
      <div className={styles.galleryContainer}>
        <Gallery images={images} enableImageSelection={false} />
      </div>
      <p className={styles.postText}>
        Стабілізаційний пункт 93-ї бригади Холодний Яр на Бахмутському напрямку.
        Тут рятують життя та повертають до строю поранених бійців, які мужньо
        відстоюють наші цінності та свободу на передовій. Медики працюють
        максимально злагоджено, їхні дії доведені до автоматизму. Кожне
        врятоване життя – це також перемога у війні. Завдяки зусиллям медиків у
        багатьох холодноярців з’явився другий день народження. Стабілізувати
        стан воїна, в разі критичної потреби здійснити первинне хірургічне
        втручання та доправити його до шпиталю – основна місія, що вимагає від
        медиків рішучості, стійкості, самовідданості та високого рівня
        професіоналізму. Великий уклін та подяка медикам за їх повсякденну важку
        працю!
      </p>
    </div>
  );
};

export default Post;
