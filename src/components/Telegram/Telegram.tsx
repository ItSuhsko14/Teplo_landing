import React from "react";
import Post from "./Post";
let styles = require("./telegram.module.css");

const Telegram: React.FC = () => {
  const [posts, setPosts] = React.useState([
    { id: 0, text: "text1" },
    { id: 1, text: "text2" },
    { id: 2, text: "text3" },
  ]);

  return (
    <div className={styles.container} id="telegram">
      <div className="title darkColor">Наш телеграм</div>
      <div className={styles.text}>
        Будь в курсі наших останніх новин - підписуйся на телеграм канал!
      </div>
      <div className={styles.main}>
        <div className={styles.mainTitle}>-= ТЕПЛО НА ПЕРЕДОВУ =-</div>
        <div className={styles.mainContent}>
          <Post text="post text" />
          <Post text="post text" />
          {/* {posts.map((post) => (
            <Post text={post.text} />
          ))} */}
        </div>
        <div className={styles.cta}>Підписатись</div>
      </div>
    </div>
  );
};

export default Telegram;
