import React, { useEffect } from "react";
import "./style.css";
import pic from "./patrick-tomasso-QMDap1TAu0g-unsplash.jpg";

export default function InfoPanel() {
  function handleClick(e: any) {
    const rightPanel = document.getElementById("rightpanel");
    const leftPanel = document.getElementById("leftpanel");

    if (rightPanel?.classList.contains("show-right")) {
      rightPanel?.classList.remove("show-right");
      leftPanel?.classList.remove("show-left");
    } else {
      rightPanel?.classList.add("show-right");
      leftPanel?.classList.add("show-left");
    }
  }

  useEffect(() => {
    let li: NodeListOf<HTMLElement> = document.querySelectorAll(
      "#container-scroll-reveal"
    );
    console.log(li);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target);
          entry.target.children[0].classList.toggle(
            "show-right",
            entry.isIntersecting
          );
          entry.target.children[1].classList.toggle(
            "show-left",
            entry.isIntersecting
          );
        });
      },
      {
        threshold: 0.3,
      }
    );

    li.forEach((item) => {
      console.log(item);
      observer.observe(item);
    });
  }, []);

  return (
    <>
      <div id="container-scroll-reveal" className="1">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start "
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start "
        >
          <p>right InfoPanel</p>
        </div>
      </div>
      <div id="container-scroll-reveal" className="2">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start"
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start "
        >
          <p>right InfoPanel</p>
        </div>
      </div>
      <div id="container-scroll-reveal" className="3">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start"
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start"
        >
          <p>right InfoPanel</p>
        </div>
      </div>
      <div id="container-scroll-reveal" className="4">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start"
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start"
        >
          <p>
            Ukrainian soldiers have been welcomed into Kherson by jubilant
            residents, after Russia said it had fully withdrawn from the key
            southern city. Video showed locals on the streets, flying Ukraine's
            national flag and chanting as Kyiv's troops arrived. Ukrainian
            President Volodymyr Zelensky said Kherson was "our city". Kherson
            was the only regional capital taken by Russia after February's
            invasion. The retreat has been seen as one of its biggest setbacks
            of the war.
          </p>
        </div>
      </div>
      <div id="container-scroll-reveal">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start "
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start "
        >
          <p>right InfoPanel</p>
        </div>
      </div>
      <div id="container-scroll-reveal">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start"
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start "
        >
          <p>right InfoPanel</p>
        </div>
      </div>
      <div id="container-scroll-reveal">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start"
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start"
        >
          <p>right InfoPanel</p>
        </div>
      </div>
      <div id="container-scroll-reveal">
        <div
          id="leftpanel"
          className="scroll-reveal-element left-scroll-reveal-start"
        >
          <img id="img-scroll-reveal" src={pic} alt="" />
        </div>

        <div
          id="rightpanel"
          className="scroll-reveal-element right-scroll-reveal-start"
        >
          <p>right InfoPanel</p>
        </div>
      </div>
      <button onClick={handleClick}>add or remove</button>;
      {/* <button onClick={handleNewDiv}>new massive div</button>; */}
    </>
  );
}
