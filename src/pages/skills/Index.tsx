import React, { useState } from "react";
import FakeChatBot from "../../components/FakeChatBot/FakeChatBot";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills";
import "./index.css";

export default function SkillsPage() {
  const [myState, setMyState]: any = useState("");

  function addToChat() {
    console.log("func in skills page called");
    // setMyState(`${myState} + "hi"`);
  }

  return (
    // <div>Skills</div>
    <>
      <br></br>
      {/* <FakeChatBot myState={myState} /> */}
      <Skills addToChat={addToChat} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Hero />
    </>
  );
}

// import React from 'react'

// export default function Index() {
//   function callingFunc(params:type) {
//     return addToChat()
//   }
// return (
// <div>Index</div>
// )
// }
