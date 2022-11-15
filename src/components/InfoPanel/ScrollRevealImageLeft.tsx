import React from "react";
import pic from "./patrick-tomasso-QMDap1TAu0g-unsplash.jpg";
import { AboutMeData } from "./AboutMeData/AboutMeData";
import ProcessDataScrollRev from "./AboutMeData/ProcessDataScrollRev";

export default function ScrollRevealImageLeft() {
  const classNameLeft: string =
    "scroll-reveal-element left-scroll-reveal-start observe-this";
  const classNameRight: string =
    "scroll-reveal-element right-scroll-reveal-start observe-this";

  // let FixedData = AboutMeData;
  console.log(AboutMeData);

  // for (let i = 0; i < FixedData.length; i++) {
  // const splitup = ProcessDataScrollRev(AboutMeData[i].text);
  // console.log("to this", splitup);
  // FixedData[i].text = splitup;
  // (ProcessDataScrollRev(FixedData[i].text));
  // console.log(ProcessDataScrollRev(FixedData[i].text));
  // console.log(FixedData[i].text);
  // }

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

            {
              // const splitIntoLines = ProcessDataScrollRev(section.text)
              section.text.map((line: any) => (
                <p className={classNameRight}>{line}</p>
              ))
            }

            <button className="scroll-reveal-element btn-reveal-start observe-this speed1">
              Portfolio
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
