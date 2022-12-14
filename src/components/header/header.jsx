import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
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
            <Link to="/login" className="nav__link">
              Login
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/register" className="nav__link">
              Sign up
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
