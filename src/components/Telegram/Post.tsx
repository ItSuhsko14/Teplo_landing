import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface ImageData {
  download_url: string;
}

const Post: React.FC<{ text: string }> = ({ text }) => {
  const [listOfImages, setListOfImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
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

  return (
    <div>
      {listOfImages.length > 0 ? (
        listOfImages.map((imageData, index) => {
          const imgUrl = imageData.download_url; // Посилання на зображення
          const img = getImage(imgUrl);

          return (
            <div key={index}>
              <img
                src={imgUrl}
                alt={`Image ${index}`}
                style={{ width: "30%" }}
              />
              {img && <GatsbyImage image={img} alt={`Image ${index}`} />}
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
      {text}
    </div>
  );
};

export default Post;
