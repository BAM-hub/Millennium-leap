import styles from "../styles/Home.module.css";
import Post from "../components/post/Post";
import PostInput from "../components/post/PostInput";
import { useState } from "react";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.name !== "") SetPosts([...posts, post]);
  };

  const [post, setPost] = useState({
    name: "",
    text: "",
  });
  const [posts, SetPosts] = useState([]);

  return (
    <div className={styles.main}>
      {posts.map((post) => (
        <Post post={post} key={post.text} />
      ))}
      <PostInput post={post} setPost={setPost} handleSubmit={handleSubmit} />
    </div>
  );
}
