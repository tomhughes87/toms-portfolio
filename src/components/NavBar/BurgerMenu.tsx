import React from "react";
import { Link } from "react-router-dom";
import "./BurgerMenuStyle.css";

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
            <Link className="burger-menu-text" to="/cv">
              <p className="burger-menu-text">CV</p>
            </Link>
          </li>
          <li>
            <Link className="burger-menu-text" to="/aboutme">
              <p className="burger-menu-text">About Me</p>
            </Link>
          </li>

          <li>
            <Link className="burger-menu-text" to="/skills">
              <p className="burger-menu-text">Skills</p>
            </Link>
          </li>

          <li>
            <Link className="burger-menu-text" to="/projects">
              <p className="burger-menu-text">Projects</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
