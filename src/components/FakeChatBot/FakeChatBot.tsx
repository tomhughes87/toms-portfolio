import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import convoData from "./ConvoDataCopy.js";
import ChatWindow from "./ChatWindow";

// data
import ChatLog from "./ChatLog.json";

// images
import robot from "./imgs/robot-profile.png";
import arrow from "./imgs/open-close-icon.png";
import send from "./imgs/send-icon.png";

export default function FakeChatBot({ myState }: any) {
  useEffect(() => {
    //
    //
    if (myState > 0) {
      // return;
      chatFuncInChatBot();
      //
    } else {
      return;
    }
  }, [myState]);

  const [chatRecord, setChatRecord] = useState([
    "I'm looking forward to chatting to you more ... once Tom stops drinking and gaming and pulls his f-ing socks up",
    "Tom has create me to help you understand his skills",
    "My name is a.a.i. I am Artifical a.i",
    "Hi there",
  ]);
  const [counter, setcounter] = useState(0);

  // function chatFuncInChatBot() {
  const chatFuncInChatBot = () => {
    console.log(myState.length);
    // const thingClicked = watchLogos[i].children[2].innerHTML;
    // let clickedThing = e.target.innerHTML;
    // console.log(clickedThing);
    console.log("working, func in chatbot fired");
    let newChatRecord = chatRecord;
    console.log("before setstate,", chatRecord);
    newChatRecord.unshift("clickedThing");
    setChatRecord(newChatRecord);
    // console.log("after setstate,", chatRecord);
  };

  // useeffect(
  // get all logos
  // add event listener to all logos
  // do a thing - database matching
  // setstate <<<< FAILED

  // )

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

  // function handleClickSend() {
  //   const message = document.getElementById(
  //     "text-input-chatbot"
  //   ) as HTMLInputElement;
  //   console.log(message.value);
  //   let newChatRecord = chatRecord;
  //   newChatRecord.unshift(message.value);
  //   setChatRecord(newChatRecord);
  //   console.log(chatRecord);
  //   message.value = "";
  // }

  console.log(ChatLog);

  const handleClickSend = () => {
    const message = document.getElementById(
      "text-input-chatbot"
    ) as HTMLInputElement;
    console.log(message.value);

    if (message.value === "") {
      return;
    }

    let newChatRecord = chatRecord;
    newChatRecord.unshift(message.value);
    setChatRecord(newChatRecord);
    console.log(chatRecord);
    message.value = "";
    setcounter(counter + 1);
  };

  useEffect(() => {
    console.log("updated");
  }, [chatRecord]);

  return (
    <div id="container-fakeChatBot">
      {/* <button onClick={addToChat}>test</button> */}
      <div id="container-header-fakeChatBot" className="blinking-alert">
        <img className="profile-pic-fakeChatBot" src={robot} />
        <div className="container-ai-status-username">
          {/* <p className="username-fakeChatBot">A.A.I (Artificial A.i)</p> */}
          <p className="username-fakeChatBot">A.A.I (Artificial A.i)</p>
          <p className="status-fakeChatBot">is typing a message</p>
        </div>
        <img id="open-close-fakeChatBot" onClick={minimiseChat} src={arrow} />
      </div>

      {/* <p>{counter}</p> */}
      <ChatWindow chatWindow={ChatLog} />
      {/* <div className="chat-area-fakeChatBot">
        {chatRecord.map((line: any) => (
          <div className="bubble bubble-bottom-left" key={`messageKey${line}`}>
            <p className="message-FakeChatBot">{line}</p>
          </div>
        ))}
      </div> */}

      <div className="write-message-container">
        <input
          id="text-input-chatbot"
          type="text"
          // disabled
          placeholder="Write a message"
          // placeholder="A.A.I has disable your sending ability"
        />
        <img
          className="send-btn-fakeChatBot"
          src={send}
          onClick={handleClickSend}
        />
      </div>
    </div>
  );
}

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
