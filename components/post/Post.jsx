import React from "react";
import styles from "../../styles/Post.module.css";

function Post({ post: { name, text } }) {
  return (
    <div className={styles.post}>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Post;
