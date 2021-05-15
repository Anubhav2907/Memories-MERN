import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";

function Posts() {
  const classes = useStyles();
  return (
    <div>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default Posts;
