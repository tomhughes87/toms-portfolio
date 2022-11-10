import React from "react";

import "./styles.css";
// import allimages from "./namegen.png";
// import icontime from "./icon-time.png";
import icontime from "./icons/icon-time.png"
import icontesting from "./icons/icon-testing.png";
import iconppl from "./icons/icon-ppl.png";
import icondesktopmobile from "./icons/icon-desktop-mobile.png";

// import * from "./previews";

// const myImages:any ={};
// import * as myImages from './previews'  

// console.table(myImages)
import { Link } from "react-router-dom";


export default function ProjectIndiCardRedo(props:any) {
  // console.log('props');
  console.log(props.details);
  console.log(props.details[1].FrontCard.Title);
  // console.log(props.details.Project1.LeftPanel.Link);
  console.log(props.details[0].FrontCard.Title);

  interface projectCardsTypes {
    BG_color:string,
    LeftPanel:{
      TechUsed:[],
      Link:string,
      GitHub:string,
    },
    FrontCard:{
      Title:string,
      Preview:string
    }
    BackCard:{
    Description: string
    Stats:{
      Devs:string,
      Days:string,
      Responsive:string,
      Testing:string
    }
    }
  }

  return (
    <>



  <div className="profile-list">
            {
              props.details?.map((stuff: projectCardsTypes) =>(
  
      <div className="card" >
      <div className="additional" style={{backgroundColor:`${stuff.BG_color}`}}>
        
        {/* left panel of card */}
        <div className="leftPanel">
          <h4>Tech Used:</h4>
          <div className="ProjCardTechList">
              {stuff.LeftPanel.TechUsed.map((tech,index)=>{
                return <p>{tech}</p>
              })}
          </div>
          <br></br>
          <a
            className="links"
            href={stuff.LeftPanel.Link}
            target="_blank"
          >
            Visit Site
          </a>
          <a
            className="links"
            href={stuff.LeftPanel.GitHub}
            target="_blank"
          >
            GitHub Repo
          </a>
        </div>

      
 
        {/* BACK OF CARD 1 */}
        <div className="more-info">
          
            <h1>Description & Stats</h1>
          <div className="ProjCardDescContainer">
            <div className="coords">
              <span>
               {stuff.BackCard.Description}
              </span>
            </div>
          </div>
        

          <div className="stats">
            <div>
              <div className="title">Devs</div>
              <img className="fa fa-group icon" src={iconppl} alt="Logo" />
              <div className="value">{stuff.BackCard.Stats.Devs}</div>
            </div>
            <div>
              <div className="title">Days</div>
              <img className="fa fa-group icon" src={icontime} alt="Logo" />
              <div className="value">{stuff.BackCard.Stats.Days}</div>
            </div>
            <div>
              <div className="title">Testing</div>
              <img
                className="fa fa-group icon"
                src={icontesting}
                alt="Logo"
              />
              <div className="value">{stuff.BackCard.Stats.Testing}</div>
            </div>
            <div>
              <div className="title">Responsive</div>
              <img
                className="fa fa-group icon"
                src={icondesktopmobile}
                alt="Logo"
              />
              <div className="value">{stuff.BackCard.Stats.Responsive}</div>
            </div>
          </div>
        </div>
        {/* ./namegen.png */}
        {/* FRONT OF CARD 1 */}
      </div>
      <div className="containerBackOfCard">
        <h1>{stuff.FrontCard.Title}</h1>
        <img className="PhonePreview" src={require(`${stuff.FrontCard.Preview}`)} alt="Logo" />
        {/* <img className="PhonePreview" src={require("./images")} alt="Logo" /> */}
        {/* <img className="PhonePreview" src={require(".\previewIcecream.png")} alt="Logo" /> */}
        {/* <img className="PhonePreview" src="./previewIcecream.png" alt="Logo" /> */}
        {/* <img className="PhonePreview" src='/images/prevQuiz.png' alt="Logo" /> */}
        {/* <img className="PhonePreview" src='/images/preview/prevQuiz.png' alt="Logo" /> */}
              {/* import {image } from "../"; */}
        <span className="more">Mouse over the card for more info</span>
        
      </div>
      
    </div>
  
                              
            ))
          }
        
       </div> 

    
    </>
  );
}

// https://reactjs.org/docs/lists-and-keys.html <useful
// https://codesandbox.io/s/zxl7324x7m?file=/src/data/profile.json  <v useful
// https://bobbyhadz.com/blog/react-map-nested-array <nested mapping