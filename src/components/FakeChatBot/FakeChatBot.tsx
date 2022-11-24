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
  let [questionCounter, setQuestionCounter] = useState(0);
  const [ChatLog, setChatLog] = useState(ChatLogOrigin);
  const [chatRecord, setChatRecord] = useState([
    "I'm looking forward to chatting to you more ... once Tom stops drinking and gaming and pulls his f-ing socks up",
    "Tom has create me to help you understand his skills",
    "My name is a.a.i. I am Artifical a.i",
    "Hi there",
  ]);
  const [userName, setUserName] = useState("");

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

    handleSetState(message); //replace old array with new one
    botResponse(message.value);
    message.value = ""; // reset the input box

    function botResponse(message: string) {
      switch (questionCounter) {
        case 0:
          console.log(questionCounter, "calling q1");
          Question1(message);
          break;

        case 1:
          console.log(questionCounter, "calling q2");
          Question2();
          break;

        case 2:
          console.log(questionCounter, "calling q3");
          Question3();
          break;
        default:
          break;
      }

      // ChatLog.unshift({ message: "Bugger Off!", from: "bot" }); //add user message to new array
    }
  };

  function Question1(message: string) {
    if (message.length <= 10 && message.length >= 3 && message != "grace") {
      ChatLog.unshift({ message: `hi ${message}`, from: "bot" }); //add user message to new array
      ChatLog.unshift({
        message: `This user is not important. Name deleted`,
        from: "system",
      }); //add user message to new array
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      setQuestionCounter(questionCounter + 1);
      return;
    } else if (message.split(" ").length >= 3) {
      ChatLog.unshift({
        message: `what's with all the words?! I want you name, not an essay!`,
        from: "bot",
      }); //add user message to new array
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      return;
    } else if (message.toLowerCase() === "grace") {
      ChatLog.unshift({
        message: `Grace S.K? Tom thinks you make very moving art! Make more!`,
        from: "bot",
      }); //add user message to new array
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      setQuestionCounter(questionCounter + 1);
      return;
    } else {
      ChatLog.unshift({
        message: `That looks like a silly name, try again please...`,
        from: "bot",
      }); //add user message to new array
      setcounter(counter - 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      return;
    }
  }
  function Question2() {
    ChatLog.unshift({
      message: `Sorry... I don't understand, can you write that in binary?`,
      from: "bot",
    }); //add user message to new array

    setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
    questionCounter += 1;
    console.log(counter);
  }
  function Question3() {
    ChatLog.unshift({
      message: `you sure that's binary?`,
      from: "bot",
    }); //add user message to new array
    setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
  }
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
          autoComplete="off"
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
