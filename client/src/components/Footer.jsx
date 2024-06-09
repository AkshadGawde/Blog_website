import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/Agriculture">Agriculture</Link>{" "}
          {/* Corrected path */}
        </li>
        <li>
          <Link to="/posts/categories/Business">Business</Link>{" "}
          {/* Corrected path */}
        </li>
        <li>
          <Link to="/posts/categories/Education">Education</Link>{" "}
          {/* Corrected path */}
        </li>
        <li>
          <Link to="/posts/categories/Entertainment">Entertainment</Link>{" "}
          {/* Corrected path */}
        </li>
        <li>
          <Link to="/posts/categories/Art">Art</Link> {/* Corrected path */}
        </li>
        <li>
          <Link to="/posts/categories/Investment">Investment</Link>{" "}
          {/* Corrected path */}
        </li>
        <li>
          <Link to="/posts/categories/Uncategorized">Uncategorised</Link>{" "}
          {/* Corrected path */}
        </li>
        <li>
          <Link to="/posts/categories/Weather">Weather</Link>{" "}
          {/* Corrected path */}
        </li>
      </ul>

      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, Akshad Gawde 2024 </small>
      </div>
    </footer>
  );
};

export default Footer;
