import React from "react";
import "./index.css";
import BurgerMenu from "./BurgerMenu";
import DesktopMenu from "./DesktopMenu";

export default function NavBar() {
  return (
    <>
      <div id="NavBar-Container">
        <BurgerMenu />
        <DesktopMenu />
      </div>

      <div id="bufferTool">d</div>
    </>
  );
}
