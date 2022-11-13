import React from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  return (
    <div id="Navbar-Mobile">
      <div className="Hamburger-Menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Link className="NavLink-Text" to="/cv">
              <p className="NavLink-Text">CV</p>
            </Link>
          </li>
          <li>
            <Link className="NavLink-Text" to="/aboutme">
              <p className="NavLink-Text">About Me</p>
            </Link>
          </li>

          <li>
            <Link className="NavLink-Text" to="/skills">
              <p className="NavLink-Text">Skills</p>
            </Link>
          </li>

          <li>
            <Link className="NavLink-Text" to="/projects">
              <p className="NavLink-Text">Projects</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
