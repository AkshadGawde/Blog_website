import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`}>
      <div className="post__author">
        <img src={Avatar} alt="" />
      </div>

      <div className="post__author-details">
        <h5>By: Ernst Achiever</h5>
        <small>June 23, 2021</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
