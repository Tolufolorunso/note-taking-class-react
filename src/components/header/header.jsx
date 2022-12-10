import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div>
      <header className="nav">
        <h3 className="logo">{<span className="highlight">Note</span>} App</h3>
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="#">
              Notes
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;


