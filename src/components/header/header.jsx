import React from "react";
import Text from "../Text";

import "./header.css"

const Header = (props) => {
  const {name} = props
  console.log(props)
  return (
    <header className="header">
      <h3>
        {/* <span>N</span>oteTaking */}
        {name}
      </h3>
      <ul>
        <li>
          <a href="#">Notes</a>
        </li>
        <li>
          <a href="#">ABout</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
