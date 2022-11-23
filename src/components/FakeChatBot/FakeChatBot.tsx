import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
// import convoData from "./ConvoDataCopy.js";
import ChatWindow from "./ChatWindow";

// data
import ChatLogOrigin from "./ChatLog.json";

// images
import robot from "./imgs/robot-profile.png";
import arrow from "./imgs/open-close-icon.png";
import send from "./imgs/send-icon.png";

// func
import { ComputebotResponses } from "./ComputebotResponses";

export default function FakeChatBot({ myState }: any) {
  useEffect(() => {
    if (myState > 0) {
      chatFuncInChatBot();
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

  const [ChatLog, setChatLog] = useState(ChatLogOrigin);

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

  const [userMessage, setUserMessage] = useState("");

  console.log("reading state inside main func, ", ChatLog);

  const handleSetState = (newChatLog: any) => {
    console.log("HANDLING STATE HERE!");
    setChatLog(newChatLog); //replace old array with new one
  };

  const handleClickSend = () => {
    const message = document.getElementById(
      "text-input-chatbot"
    ) as HTMLInputElement;
    console.log("user input message is:", message.value);

    if (message.value === "") {
      //GUARD: if nothing entered, do nothing
      return;
    }

    let newChatLog = ChatLog; //make new array
    newChatLog.unshift({ message: message.value, from: "user" }); //add user message to new array

    handleSetState(newChatLog); //replace old array with new one

    console.log("message sent to chat record:", ChatLog);

    message.value = ""; // reset the input box
    setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
    //
    // handleSetState(message.value);
    setUserMessage(message.value);
    //
    // console.log(userMessage);
    // botResponse(message.value);
    // const botMessage = computebotResponses(message.value);
    // const thing = <ComputebotResponses />;
    botResponse(message.value);
    // botResponse(message.value, setChatLog, setcounter);
    // setUserMessage("thiiiiiiiiiiiiis is set late");
    // computebotResponses(userMessage);
    // console.log("RETURNED MESSAGE~", botMessage);
    // };

    // const botResponse = () => {
    function botResponse(
      message: string
      // { setChatLog }: any,
      // { setcounter }: any
    ) {
      // }

      console.log("in botReps func", message);
      // console.log(message);
      // const botMessage = ComputebotResponses(message);
      console.log("waiting");
      // setTimeout(() => {
      console.log("wait over!");
      // console.log("the returned message", botMessage);
      let newChatLog = ChatLog; //make new array
      newChatLog.unshift({ message: "Bugger Off!", from: "bot" }); //add user message to new array
      // setChatLog(newChatLog); //replace old array with new one
      console.log("Bot message sent to chat record:", ChatLog);
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      // }, 10000);
    }
  };

  return (
    <div id="container-fakeChatBot">
      <div id="container-header-fakeChatBot" className="blinking-alert">
        <img className="profile-pic-fakeChatBot" src={robot} />
        <div className="container-ai-status-username">
          <p className="username-fakeChatBot">A.A.I (Artificial A.i)</p>
          <p className="status-fakeChatBot">is typing a message</p>
        </div>
        <img id="open-close-fakeChatBot" onClick={minimiseChat} src={arrow} />
      </div>

      <ChatWindow chatWindow={ChatLog} />

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
