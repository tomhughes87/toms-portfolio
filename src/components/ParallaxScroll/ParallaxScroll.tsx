import React from "react";
// import ImageOfClouds from "./imgs/ImageOfClouds.png";
// import ImageOfMe from "./imgs/ImageOfMe.png";
// import ImageOfLeeds from "./imgs/ImageOfLeeds.png";
// import ImageOfBus from "./imgs/ImageOfBus.png";
// import ImageMeTest from "./imgs/imgMeTest.png";
// import ImageLeedsTest from "./imgs/imgLeedsTest.png";
// import ImageSktTest from "./imgs/ImgSkyTest.png";
import ImageOfClouds from "./imgs/imgSky.png";
import ImageLeedsTest from "./imgs/imgLeeds.png";
import ImageOfMe from "./imgs/imgMe.png";
import ImageOfBus from "./imgs/imgBus.png";
import ImageOfBgCranes from "./imgs/imgBgCrane.png";
import ImageOfMidCrane from "./imgs/imgMidCrane.png";
import ImageOfOverlay from "./imgs/imgOverlay.png";

import "./ParallaxScroll.css";
import ScrollRevealImageLeft from "../InfoPanel/ScrollRevealImageLeft";

export default function ParallaxScrolling() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="parallax-wrapper">
        <header className="parallax-header">
          {/* <img src={ImageOfClouds} className="parallax-bg" /> */}

          <img src={ImageOfClouds} className="parallax-bg" />

          <img src={ImageOfOverlay} className="parallax-overlay" />

          <img src={ImageOfBgCranes} className="parallax-BgCrane" />
          <img src={ImageOfMidCrane} className="parallax-MidCrane" />
          {/* <img src={ImageOfClouds} className="parallax-bg-cranes" /> */}
          {/* <img src={ImageOfClouds} className="parallax-mid-cranes" /> */}
          {/* <img src={ImageOfLeeds} className="parallax-mid" /> */}
          <img src={ImageLeedsTest} className="parallax-mid" />
          {/* <img src={ImageOfBus} className="parallax-fg-bus" /> */}
          <img src={ImageOfMe} className="parallax-fg" />
          <img src={ImageOfBus} className="parallax-bus" />
          {/* <img src={ImageMeTest} className="parallax-fg" /> */}
          <h1 className="title-aboutme">About Me</h1>
        </header>

        <div className="cover-parallax">
          <ScrollRevealImageLeft />
        </div>
      </div>
    </>
  );
}
