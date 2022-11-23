import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import ChatWindow from "./ChatWindow";
// data
import ChatLogOrigin from "./ChatLog.json";
// func
import { ComputebotResponses } from "./ComputebotResponses";
// images
import robot from "./imgs/robot-profile.png";
import arrow from "./imgs/open-close-icon.png";
import send from "./imgs/send-icon.png";

export default function FakeChatBot({ myState }: any) {
  const [counter, setcounter] = useState(0);
  const [ChatLog, setChatLog] = useState(ChatLogOrigin);
  const [chatRecord, setChatRecord] = useState([
    "I'm looking forward to chatting to you more ... once Tom stops drinking and gaming and pulls his f-ing socks up",
    "Tom has create me to help you understand his skills",
    "My name is a.a.i. I am Artifical a.i",
    "Hi there",
  ]);

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
  };

  const handleSetState = (message: any) => {
    ChatLog.unshift({ message: message.value, from: "user" }); //add user message to new array

    // newChatLog.unshift({ message: "Bugger Off!", from: "bot" }); //add user message to new array
    // newChatLog.unshift(newChatLog); //add user message to new array
    // setChatLog(newChatLog); //replace old array with new one
    // setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
  };

  const handleClickSend = () => {
    // get user message
    const message = document.getElementById(
      "text-input-chatbot"
    ) as HTMLInputElement;

    //GUARD: if no input, do nothing
    if (message.value === "") {
      return;
    }

    // let newChatLog = ChatLog; //make new array
    // newChatLog.unshift({ message: message.value, from: "user" }); //add user message to new array

    handleSetState(message); //replace old array with new one
    message.value = ""; // reset the input box
    // setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array

    botResponse(message.value);

    function botResponse(message: string) {
      let newChatLog = ChatLog; //make new array
      newChatLog.unshift({ message: "Bugger Off!", from: "bot" }); //add user message to new array
      // setChatLog(newChatLog); //replace old array with new one
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      // handleSetState(newChatLog); //replace old array with new one
    }
  };

  return (
    <div id="container-fakeChatBot">
      <div id="container-header-fakeChatBot" className="blinking-alert">
        <img className="profile-pic-fakeChatBot" src={robot} />
        <div className="container-ai-status-username">
          <p className="username-fakeChatBot">A.A.I (Artificial A.i)</p>
          <p className="status-fakeChatBot">Here to guild you</p>
        </div>
        <img id="open-close-fakeChatBot" onClick={minimiseChat} src={arrow} />
      </div>

      <ChatWindow chatWindow={ChatLog} />

      <div className="write-message-container">
        <input
          id="text-input-chatbot"
          type="text"
          placeholder="Write a message"
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
