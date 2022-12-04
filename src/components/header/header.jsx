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

// const Header = (props) => {
//   const { name } = props;
//   console.log(props);
//   return (
//     <header className="header">
//       <h3>
//         {/* <span>N</span>oteTaking */}
//         {name}
//       </h3>
//       <ul>
//         <li>
//           <a href="#">Notes</a>
//         </li>
//         <li>
//           <a href="#">ABout</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//     </header>
//   );
// };
