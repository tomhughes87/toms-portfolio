import React, { useEffect, useState } from "react";
import "./styles.css";
import robot from "./robot-profile.png";
import arrow from "./open-close-icon.png";
import send from "./send-icon.png";
// import convoData from "./ConvoData.json";
import convoData from "./ConvoDataCopy.js";

export default function FakeChatBot() {
  const [chatRecord, setChatRecord] = useState([
    "I'm looking forward to chatting to you more ... once Tom stops drinking and gaming and pulls his f-ing socks up",
    "Tom has create me to help you understand his skills",
    "My name is a.a.i. I am Artifical a.i",
    "Hi there",
  ]);

  const newTestingData: any = convoData;

  // console.log(convoData);
  // console.log(convoData[0]);
  // console.log(convoData[0].typescript?[0]);
  console.log(convoData.Typescript[2]);

  const [chatTitle, setChatTitle] = useState("hey there!");
  const [chatText, setChatText] = useState(
    "Click something!... not too much though"
  );

  interface typesTyping {
    Typescript: string;
    Javascript: string;
  }

  // function clickInfoToBot() {}

  useEffect(() => {
    const watchLogos = document.getElementsByClassName("logo");
    //   console.log(watchLogos);

    for (let i = 0; i < watchLogos.length; i++) {
      // const element = watchLogos[i];

      // handle click of logo
      watchLogos[i].addEventListener("click", () => {
        const thingClicked = watchLogos[i].children[2].innerHTML;
        console.log("clicked: be:", thingClicked);

        // type Easing = "Javascript" | "ease-out" | "ease-in-out";

        const normString = "Javascript"; //type string
        const spec: string = watchLogos[i].children[2].innerHTML; //type string

        // console.log("trying", trying, "is type: ", typeof trying);
        // console.log(
        //   "othertrying",
        //   othertrying,
        //   "is type: ",
        //   typeof othertrying
        // );

        // const tryingExtra = newTestingData.Typescript[1];
        // console.log(".............this dunno:", convoData[`${othertrying}`][0]);
        // console.log(".............this dunno:", convoData[`${normString}`][0]);

        switch (spec) {
          case "Typescript":
            console.log("Typescript clicked!");
            console.log("*******************", convoData.Typescript[0]);
            convoData[`${normString}`].shift();
            let newChatRecord = chatRecord;
            console.log(newChatRecord);
            newChatRecord.unshift(convoData.Typescript[0]);
            console.log(chatRecord);
            setChatRecord(newChatRecord);
            console.log(chatRecord);

            break;

          case "Javascript":
            console.log("Javascript clicked!");
            break;

          default:
            break;
        }
        // console.log(".............this dunno:", convoData[Typescriptipt][0]);

        let newChatRecord = chatRecord;
        newChatRecord.unshift("hi");

        // convoData[`${normString}`].shift();
        // setChatRecord(newChatRecord);
        // setChatTitle(watchLogos[i].children[2].innerHTML);

        setChatRecord(newChatRecord);
      });
    }
  }, []);

  // watchLogos.forEach(element => {

  // });

  // element.addEventListener("click", myFunction);

  // function myFunction() {
  //   document.getElementById("demo").innerHTML = "Hello World";
  // }
  function minimiseChat() {
    const chatbox = document.getElementById("container-fakeChatBot"); //select the chat box
    const arrow = document.getElementById("open-close-fakeChatBot"); //select the arrow
    const header = document.getElementById("container-header-fakeChatBot"); //select the arrow

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
          <div className="bubble bubble-bottom-left">
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
