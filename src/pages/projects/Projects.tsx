// import React from 'react'

// export default function Projects() {
//   return (
//   )
// }
import React from "react";
import ProjectCards from "../../components/projectCards";
import ProjectIndiCardRedo from "../../components/redoing";
// import "./styles.css";
import CardData from "../../data/data.json";

// console.log(CardData  )

export default function Projects() {
  return (
    <>
      {/* <div>Projects</div> */}
      {/* <p>hei</p> */}
      {/* <ProjectCards /> */}

      <br></br>
      <br></br>
      <div className="ProjCardsMainContainer">
        <ProjectIndiCardRedo details={CardData} />
        {/* <ProjectIndiCardRedo /> */}
        {/* <ProjectIndiCardRedo /> */}
        {/* <ProjectIndiCardRedo /> */}
        {/* <ProjectIndiCardRedo /> */}
      </div>
    </>
  );
}
