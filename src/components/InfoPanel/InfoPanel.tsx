import React, { useEffect } from "react";
import "./style.css";
import pic from "./patrick-tomasso-QMDap1TAu0g-unsplash.jpg";
import ScrollRevealImageLeft from "./ScrollRevealImageLeft";

export default function InfoPanel() {
  useEffect(() => {
    let li: NodeListOf<HTMLElement> =
      document.querySelectorAll(".observe-this");
    // console.log(li);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("reveal", entry.isIntersecting);
        });
      },
      {
        threshold: 0.8,
      }
    );

    li.forEach((item) => {
      // console.log(item);
      observer.observe(item);
    });
  }, []);

  return (
    <>
      <div id="testdiv-length">
        {/* <div id="container-scroll-reveal">
          <div id="sub-container-scroll-reveal">
            <img
              // id="img-scroll-reveal"
              className="scroll-reveal-element left-scroll-reveal-start observe-this"
              src={pic}
              alt=""
            />
          </div>

          <div id="sub-container-scroll-reveal">
            <h1
              id="testing-text"
              className="scroll-reveal-element right-scroll-reveal-start observe-this speed2"
            >
              Title
            </h1>

            <p className="scroll-reveal-element right-scroll-reveal-start observe-this">
              Ukrainian soldiers have been welcomed into Kherson by jubilant
            </p>
            <p className="scroll-reveal-element right-scroll-reveal-start observe-this ">
              residents, after Russia said it had fully withdrawn from the key
            </p>
            <p className="scroll-reveal-element right-scroll-reveal-start observe-this speed2">
              southern city. Video showed locals on the streets, flying
              Ukraine's
            </p>
            <p className="scroll-reveal-element right-scroll-reveal-start observe-this speed1">
              national flag and chanting as Kyiv's troops arrived. Ukrainian
              President
            </p>
            <p className="scroll-reveal-element right-scroll-reveal-start observe-this speed1">
              Volodymyr Zelensky said Kherson was "our city". Kherson was the
              only
            </p>
            <p className="scroll-reveal-element right-scroll-reveal-start observe-this ">
              regional capital taken by Russia after February's invasion. The
              retreat
            </p>
            <p className="scroll-reveal-element right-scroll-reveal-start observe-this speed2">
              has been seen as one of its biggest setbacks of the war.
            </p>
            <button className="scroll-reveal-element btn-reveal-start observe-this ">
              Portfolio
            </button>
          </div>
        </div> */}

        <ScrollRevealImageLeft />
        {/* </div> */}
      </div>
    </>
  );
}
