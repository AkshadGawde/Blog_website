import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Navbar Logo" className="nav__logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile">Ernst Achiever</Link>
          </li>
          <li>
            <Link to="/create">Create Posts</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <button className="nav__toggle-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;
