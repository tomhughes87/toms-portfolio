import React from "react";
import pic from "./patrick-tomasso-QMDap1TAu0g-unsplash.jpg";
import { AboutMeData } from "./AboutMeData/AboutMeData";
import ProcessDataScrollRev from "./AboutMeData/ProcessDataScrollRev";

export default function ScrollRevealImageLeft() {
  const classNameLeft: string =
    "scroll-reveal-element left-scroll-reveal-start observe-this";
  const classNameRight: string =
    "scroll-reveal-element right-scroll-reveal-start observe-this";
  return (
    <>
      {AboutMeData.map((section) => (
        <div id="container-scroll-reveal">
          <div id="sub-container-scroll-reveal">
            <img className={classNameLeft} src={pic} alt="" />
          </div>
          <div id="sub-container-scroll-reveal">
            <h1 id="testing-text" className={classNameRight}>
              {section.title}
            </h1>
            {section.text.map((line: any) => (
              <p className={classNameRight}>{line}</p>
            ))}

            <button className="scroll-reveal-element btn-reveal-start observe-this speed1">
              Portfolio
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
