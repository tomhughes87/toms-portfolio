import React from "react";
import ImageOfClouds from "./imgs/ImageOfClouds.png";
import ImageOfMe from "./imgs/ImageOfMe.png";
import ImageOfLeeds from "./imgs/ImageOfLeeds.png";
import ImageOfBus from "./imgs/ImageOfBus.png";
import ImageMeTest from "./imgs/imgMeTest.png";
import ImageLeedsTest from "./imgs/imgLeedsTest.png";
import ImageSktTest from "./imgs/ImgSkyTest.png";
import "./ParallaxScroll.css";

export default function ParallaxScrolling() {
  return (
    <>
      <div className="parallax-wrapper">
        <header className="parallax-header">
          {/* <img src={ImageOfClouds} className="parallax-bg" /> */}
          <img src={ImageSktTest} className="parallax-bg" />
          {/* <img src={ImageOfClouds} className="parallax-bg-cranes" /> */}
          {/* <img src={ImageOfClouds} className="parallax-mid-cranes" /> */}
          {/* <img src={ImageOfLeeds} className="parallax-mid" /> */}
          <img src={ImageLeedsTest} className="parallax-mid" />
          {/* <img src={ImageOfBus} className="parallax-fg-bus" /> */}
          {/* <img src={ImageOfMe} className="parallax-fg" /> */}
          <img src={ImageMeTest} className="parallax-fg" />
          <h1 className="title-aboutme">About Me</h1>
        </header>

        <div className="cover-parallax"></div>
      </div>
    </>
  );
}
