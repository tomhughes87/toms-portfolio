import React, { useEffect, useState } from "react";
import "./styles.css";
import robot from "./robot-profile.png";
import arrow from "./open-close-icon.png";
import send from "./send-icon.png";
import convoData from "./ConvoDataCopy.js";

export default function FakeChatBot() {
  const [clicker, setClicker] = useState(true);
  const [logoClickCounter, setLogoClickCounter] = useState(0);

  const [chatRecord, setChatRecord] = useState([
    "I'm looking forward to chatting to you more ... once Tom stops drinking and gaming and pulls his f-ing socks up",
    "Tom has create me to help you understand his skills",
    "My name is a.a.i. I am Artifical a.i",
    "Hi there",
  ]);

  // useEffect(() => {
  //   console.log("LOGO CLICKED");
  //   setLogoClickCounter(logoClickCounter + 1);
  //   // console.log("clicks in useeffect", logoClickCounter);
  // }, [clicker]);

  // console.log(chatRecord);
  // console.log(watchLogos);

  function clicked(e: any) {
    console.log("func running");
    console.log(e);
    return;
  }
  useEffect(() => {
    //
    //

    const watchLogos = document.getElementsByClassName("logo");
    for (let i = 0; i < watchLogos.length; i++) {
      watchLogos[i].addEventListener("click", clicked);
      // watchLogos[i].addEventListener("click", () => {
      // console.log("click!");
      // let newchat = chatRecord;
      // newchat.unshift("doing this");
      // setChatRecord(newchat);
      // console.log(chatRecord);
      // });
    }
    return;
  }, []);

  // for (let i = 0; i < watchLogos.length; i++) {
  //   let newchat = chatRecord;
  //   newchat.unshift("doing this");
  //   setChatRecord(newchat);
  //   // console.log("in loop");
  // }
  // console.log(chatRecord);

  //on load:
  // useEffect(() => {
  //
  // console.log("load use effect running");
  //get all the logos
  // const watchLogos = document.getElementsByClassName("logo");
  // console.log(watchLogos);
  //
  //cicle through every logo
  // for (let i = 0; i < watchLogos.length; i++) {
  // when logo is click ...
  // watchLogos[i].addEventListener("click", () => {
  // setClicker(!clicker);
  // console.log(setClicker);
  // console.log("clicks (within btn):", { logoClickCounter });
  // let newChatRecord: any = chatRecord; //make new chat record
  // newChatRecord.unshift("ello ello"); //add new message to start of chat record
  // console.log("---------new", newChatRecord);
  // console.log("---------old", chatRecord);
  // setChatRecord(newChatRecord); //replace old chat record with new one
  // console.log("CHAT RECORD AFTER MERGE", chatRecord);
  //
  // console.log("CHAT RECORD beofre MERGE", chatRecord);
  // const thingClicked = watchLogos[i].children[2].innerHTML;
  // console.log("clicked: be:", thingClicked);
  // const whatLogosClicked: string = watchLogos[i].children[2].innerHTML; //type string
  // updateChatrecord(whatLogosClicked);
  // });
  // }
  // }, []);

  // function testAdd(newData) {}

  // function updateChatrecord(whatLogosClicked: string) {
  //   console.log("func called");
  //   switch (whatLogosClicked) {
  //     case "Typescript":
  //       const typescriptMessage = convoData.Typescript[0]; //select the first thing in the ts list

  //       let newChatRecord: any = chatRecord; //make new chat record
  //       // newChatRecord = newChatRecord.unshift(typescriptMessage); //add new message to start of chat record
  //       // setChatRecord(newChatRecord); //replace old chat record with new one
  //       // console.log("CHAT RECORD AFTER MERGE", chatRecord);
  //       break;

  //     case "Javascript":
  //       console.log("Javascript clicked!");
  //       break;

  //     default:
  //       break;
  //   }

  //   // let newChatRecord = chatRecord;
  //   // newChatRecord.unshift("hi");

  //   // convoData[`${normString}`].shift();
  //   // setChatRecord(newChatRecord);
  //   // setChatTitle(watchLogos[i].children[2].innerHTML);

  //   // setChatRecord(newChatRecord);
  // }
  // // updateChatrecord("Typescript");

  return (
    <div id="container-fakeChatBot">
      {/*  */}

      <div id="container-header-fakeChatBot" className="blinking-alert">
        <img className="profile-pic-fakeChatBot" src={robot} />
        <div className="container-ai-status-username">
          <p className="username-fakeChatBot">A.A.I (Artificial A.i)</p>
          <p className="status-fakeChatBot">is typing a message</p>
          {/* <p className="status-fakeChatBot"></p> */}
        </div>
        <img id="open-close-fakeChatBot" onClick={minimiseChat} src={arrow} />
      </div>

      <div className="chat-area-fakeChatBot">
        {chatRecord.map((line) => (
          <div className="bubble bubble-bottom-left" key={`messageKey${line}`}>
            <p className="message-FakeChatBot">{line}</p>
          </div>
        ))}
      </div>

      <div className="write-message-container">
        {/* <input type="text" placeholder="A.A.I has disable you chat" /> */}
        <input
          type="text"
          disabled
          placeholder="A.A.I has disable your sending ability"
        />
        <img className="send-btn-fakeChatBot" src={send} />
      </div>
    </div>
  );
}

function minimiseChat() {
  const chatbox = document.getElementById("container-fakeChatBot"); //select the chat box
  const arrow = document.getElementById("open-close-fakeChatBot"); //select the arrow
  const header = document.getElementById("container-header-fakeChatBot"); //select the arrow

  // deleete this:
  // let newChatRecord = chatRecord;
  // newChatRecord.unshift("hi");
  // setChatRecord(newChatRecord);
  //

  //if chat box is currently close then enlarge it:
  if (chatbox?.classList.contains("min-chat")) {
    chatbox?.classList.remove("min-chat"); // remove class that minimised it
    arrow?.classList.remove("min-chat-arrow"); //remove class that rotated it
    header?.classList.remove("blinking-alert");
  }
  //if chatbox is open then close it:
  else {
    chatbox?.classList.add("min-chat"); // add class to minimise it
    arrow?.classList.add("min-chat-arrow"); //add class to rotate it
  }
}
