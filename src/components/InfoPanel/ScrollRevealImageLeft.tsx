import React from "react";
import pic from "./patrick-tomasso-QMDap1TAu0g-unsplash.jpg";

export default function ScrollRevealImageLeft(props: any) {
  console.log(props.data.title);

  const classNameLeft: string =
    "scroll-reveal-element left-scroll-reveal-start observe-this";
  const classNameRight: string =
    "scroll-reveal-element right-scroll-reveal-start observe-this speed1";

  const splittingText = props.data.text.split(" ");

  console.log(splittingText);

  let element = [];

  // const splittingText1 = splittingText;
  for (let i = 0; i < splittingText.length; i += 6) {
    element.push(
      splittingText[i] +
        " " +
        splittingText[i + 1] +
        " " +
        splittingText[i + 2] +
        " " +
        splittingText[i + 3] +
        " " +
        splittingText[i + 4] +
        " " +
        splittingText[i + 5] +
        " "
    );
  }
  console.log(element);

  const mapped = element.map((line) => {
    <li>
      <p className={classNameRight + " " + " reveal"}>hi</p>;
    </li>;
  });

  return (
    <>
      {/* {mapped} */}
      <div id="container-scroll-reveal">
        <div id="sub-container-scroll-reveal">
          <img className={classNameLeft} src={pic} alt="" />
        </div>
        <div id="sub-container-scroll-reveal">
          <h1 id="testing-text" className={classNameRight}>
            {props.data.title}
          </h1>

          {element.map((line: any) => (
            <p className={classNameRight}>{line}</p>
          ))}

          <button className="scroll-reveal-element btn-reveal-start observe-this speed1">
            Portfolio
          </button>
        </div>
      </div>
    </>
  );
}
