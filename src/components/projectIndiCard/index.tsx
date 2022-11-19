import React from "react";

// import "./index.css";
import logo from "./namegen.png";
import icontime from "./icon-time.png";
import icontesting from "./icon-testing.png";
import iconppl from "./icon-ppl.png";
import icondesktopmobile from "./icon-desktop-mobile.png";

export default function ProjectIndiCard() {
  return (
    <>
      <div>projectIndiCard</div>

      <div>
        <div className="maincardcontainer ">
          <div className="card">
            <div className="additional">
              {/* */}
              {/* left panel of card */}
              <div className="user-card">
                <div className="level center">Visit Site</div>
                <div className=" levelgithub center">Visit GitHub</div>

                <div className="techused center">Typescript, React</div>

                <img className="PhonePreview center" src={logo} alt="Logo" />
              </div>
              {/* end of side of card */}
              {/*  */}

              {/*  */}
              {/* BACK OF CARD 1 */}
              <div className="more-info">
                <h1>Create a Pirate Ship Name</h1>

                <div className="coords">
                  <span>Description</span>
                  <span>Aug '22</span>
                </div>

                <div className="coords">
                  <span>This site randomly generates pirate ship names.</span>
                </div>

                <div className="stats">
                  <div>
                    <div className="title">Devs</div>
                    <img
                      className="fa fa-group icon"
                      src={iconppl}
                      alt="Logo"
                    />
                    <div className="value">1</div>
                  </div>
                  <div>
                    <div className="title">Days</div>
                    <img
                      className="fa fa-group icon"
                      src={icontime}
                      alt="Logo"
                    />
                    <div className="value">3</div>
                  </div>
                  <div>
                    <div className="title">Testing</div>
                    <img
                      className="fa fa-group icon"
                      src={icontesting}
                      alt="Logo"
                    />
                    <div className="value">82%</div>
                  </div>
                  <div>
                    <div className="title">Responsive</div>
                    <img
                      className="fa fa-group icon"
                      src={icondesktopmobile}
                      alt="Logo"
                    />
                    <div className="value">yes</div>
                  </div>
                </div>
              </div>
              {/* end of BACK OF CARD 1 */}
              {/*  */}
            </div>

            <div className="general">
              <h1>Random Name Generator</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                volutpat mauris, at molestie lacus. Nam vestibulum sodales odio
                ut pulvinar.
              </p>
              <span className="more">Mouse over the card for more info</span>
            </div>
          </div>

          {/* wrap entire thing */}
        </div>
      </div>
      {/* ^^^^ wrap entire thing */}
    </>
  );
}
