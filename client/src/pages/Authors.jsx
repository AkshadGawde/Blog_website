import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar4 from "../images/avatar4.jpg";
import Avatar5 from "../images/avatar5.jpg";

const authorsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: Avatar1,
    posts: "3",
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: Avatar1,
    posts: "3",
  },
  {
    id: 3,
    name: "Alice Doe",
    avatar: Avatar1,
    posts: "2",
  },
  {
    id: 4,
    name: "Nana Addo",
    avatar: Avatar1,
    posts: "0",
  },
  {
    id: 5,
    name: "Hajia Bintu",
    avatar: Avatar1,
    posts: "5",
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => (
            <Link key={id} to={`/posts/users/${id}`} className="author">
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2> No users found </h2>
      )}
    </section>
  );
};

export default Authors;
