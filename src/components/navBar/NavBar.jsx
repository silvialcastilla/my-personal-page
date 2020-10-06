import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

function navBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar_list">
        <li>
          <Link to="/" className="nav-bar_list-li">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-bar_list-li">
            About
          </Link>
        </li>
        <li>
          <Link to="/studies" className="nav-bar_list-li">
            Studies
          </Link>
        </li>
        <li>
          <Link to="/experience" className="nav-bar_list-li">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-bar_list-li">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navBar;
