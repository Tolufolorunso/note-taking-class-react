import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <header className="nav">
        <Link to="/">
          <h3 className="logo">
            {<span className="highlight">Note</span>} App
          </h3>
        </Link>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/notes" className="nav__link">
              Notes
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
