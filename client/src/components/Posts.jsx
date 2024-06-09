import React from "react";
import { useState } from "react";

import Thubmnail1 from "../images/blog1.jpg";
import Thubmnail2 from "../images/blog2.jpg";
import Thubmnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thubmnail1,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Iosum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorID: "1",
  },
  {
    id: "2",
    thumbnail: Thubmnail2,
    category: "technology",
    title: "Exploring the Latest in AI and Machine Learning",
    desc: "Lorem Iosum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorID: "2",
  },
  {
    id: "3",
    thumbnail: Thubmnail3,
    category: "health",
    title: "10 Tips for Maintaining a Healthy Lifestyle",
    desc: "Lorem Iosum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorID: "3",
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "travel",
    title: "Top 10 best destinations",
    desc: "Lorem Iosum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorID: "4",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="posts">
      {posts.map(
        ({ id, thumbnail, category, title, description, authorID }) => (
          <PostItem
            key={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={description}
            authorID={authorID}
          />
        )
      )}
    </section>
  );
};

export default Posts;
