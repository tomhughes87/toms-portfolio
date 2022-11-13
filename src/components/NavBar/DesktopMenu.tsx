import React from "react";
import { Link } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <ul id="NavBar-LeftSection">
      <li className="NavLink-Container">
        <Link className="NavLink-Text" to="/cv">
          <p className="NavLink-Text">CV</p>
        </Link>

        <div className="NavLink-Underline"></div>
      </li>

      <li className="NavLink-Container">
        <Link className="NavLink-Text" to="/aboutme">
          <p className="NavLink-Text">About Me</p>
        </Link>

        <div className="NavLink-Underline"></div>
      </li>

      <li className="NavLink-Container">
        <Link className="NavLink-Text" to="/skills">
          <p className="NavLink-Text">Skills</p>
        </Link>
        <div className="NavLink-Underline"></div>
      </li>

      <li className="NavLink-Container">
        <Link className="NavLink-Text" to="/projects">
          <p className="NavLink-Text">Projects</p>
        </Link>

        <div className="NavLink-Underline"></div>
      </li>
    </ul>
  );
}
