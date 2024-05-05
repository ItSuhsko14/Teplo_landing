import React, {useState, useEffect} from 'react'

interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
const Post: React.FC<{text: string}> = ({text}) => {
  const [listOfImages, setListOfImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=10')
      .then(response => response.json())
      .then(data => setListOfImages(data));
  }, []);

  

  return (
    <div>
      {/* {listOfImages.map((image: Image) => (
        <img src={image.download_url} alt='asdf' style={{ width: '90%' }} />  
      ))} */}
      
      {text}
    </div>
  )
}

export default Post
