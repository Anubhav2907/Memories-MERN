import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";
function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default Posts;
