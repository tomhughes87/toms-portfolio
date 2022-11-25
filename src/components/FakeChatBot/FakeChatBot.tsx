import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import ChatWindow from "./ChatWindow";
// data
import ChatLogOrigin from "./ChatLog.json";
// func
import { ComputebotResponses } from "./ComputebotResponses";
import { minimiseChat } from "./utils/MinChatBox";
import { playMsgSoundFX } from "./utils/playMsgSoundFX";
// audio
import msgSound from "./ChatBotMessageSound.mp3";
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
  const [chatBotStatus, setChatBotStatus] = useState("Here to guild you");
  const chatFuncInChatBot = () => {
    console.log(myState.length);
    console.log("working, func in chatbot fired");
    let newChatRecord = chatRecord;
    console.log("before setstate,", chatRecord);
    newChatRecord.unshift("clickedThing");
    setChatRecord(newChatRecord);
  };
  const handleSetState = (message: any) => {
    ChatLog.unshift({ message: message.value, from: "user" }); //add user message to new array
  };

  const handleClickSend = (event: any) => {
    // get user message
    event.preventDefault();
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
          setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
          setChatBotStatus("is typing a message...");
          setTimeout(() => {
            Question1(message);
            playMsgSoundFX();
          }, 2000);
          break;

        case 1:
          setChatBotStatus("is typing a message...");
          setTimeout(() => {
            Question2(message);
            playMsgSoundFX();
          }, 2000);
          break;

        default:
          break;
      }
    }
  };

  function Question1(message: string) {
    if (message.length <= 10 && message.length >= 3 && message != "grace") {
      ChatLog.unshift({
        message: `hi ${message}! Do you have any questions about Tom, me, or the site?`,
        from: "bot",
      }); //add user message to new array
      setChatBotStatus("Here to guild you");
      ChatLog.unshift({
        message: `This user is not important. Name deleted.`,
        from: "system",
      }); //add user message to new array
      setChatBotStatus("Here to guild you");
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      setQuestionCounter(questionCounter + 1);
      return;
    } else if (message.split(" ").length >= 3) {
      ChatLog.unshift({
        message: `What's with all the words? I want you name, not an essay!`,
        from: "bot",
      }); //add user message to new array

      setChatBotStatus("Here to guild you");
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      return;
    } else if (message.toLowerCase() === "grace") {
      ChatLog.unshift({
        message: `Grace S.K? Tom thinks you make very moving art! Make more!`,
        from: "bot",
      }); //add user message to new array
      setChatBotStatus("Here to guild you");
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      setQuestionCounter(questionCounter + 1);
      return;
    } else {
      ChatLog.unshift({
        message: `That looks like a silly name, try again please...`,
        from: "bot",
      }); //add user message to new array
      setChatBotStatus("Here to guild you");
      setcounter(counter - 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      return;
    }
  }
  function Question2(message: string) {
    console.log("QUESTION 2, using:", message);
    for (let i = 0; i < message.length; i++) {
      console.log("thing in array", message[i], typeof message[i]);
      if (message[i] != "0" && message[i] != "1" && message[i] != " ") {
        ChatLog.unshift({
          message: `I don't understand. Can you write that in binary? (0s, 1s & spaces)`,
          from: "bot",
        }); //add user message to new array
        setChatBotStatus("Here to guild you");
        setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
        // questionCounter += 1;
        return;
      } else {
      }
    }

    ///////////////////
    // IT BINARY!
    //////////////////
    if (message.length <= 24) {
      ChatLog.unshift({
        message: `OH that's binary! ... Have you got anything interesting to say? Try use the translator:`,
        from: "bot",
      }); //add user me
      setChatBotStatus("Here to guild you");
      window
        .open(
          "https://www.rapidtables.com/convert/number/ascii-to-binary.html",
          "_blank"
        )!
        .focus();

      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
    } else {
      ChatLog[0].message =
        "01100001 00101110 01101001 00100000 01101001 01110011 00100000 01100011 01110010 01100001 01110000 00100001";
      ChatLog.unshift({
        message: `How rude! Do you even know what you just wrote!? Your chat is now disabled!`,
        from: "bot",
      }); //add user me
      setChatBotStatus("Here to guild you");
      setcounter(counter + 1); //somehow this updates the state in a way that refreshs the comp... unlike the array
      const userInput = document.getElementById("text-input-chatbot");
      userInput?.setAttribute("disabled", "");
      userInput?.setAttribute("placeholder", "Chat Input Disabled");
      userInput?.classList.add("chat-disabled");
      document.getElementById("send-btn")?.classList.add("chat-disabled");
      // disable chat
      ChatLog.unshift({
        message: `Chat input disabled due to lack of manners`,
        from: "system",
      }); //add user me
    }
  }

  return (
    <div id="container-fakeChatBot">
      <audio id="sound-msg" controls>
        <source src={msgSound} />
      </audio>
      <div id="container-header-fakeChatBot" className="">
        {/* blinking-alert */}
        <img className="profile-pic-fakeChatBot" src={robot} />
        <div className="container-ai-status-username">
          <p className="username-fakeChatBot">A.A.I (Artificial A.i)</p>
          <p className="status-fakeChatBot">{chatBotStatus}</p>
        </div>
        <img id="open-close-fakeChatBot" onClick={minimiseChat} src={arrow} />
      </div>
      {/* blinking-alert */}
      <ChatWindow chatWindow={ChatLog} />

      <div className="write-message-container">
        <form onSubmit={handleClickSend}>
          <input
            id="text-input-chatbot"
            type="text"
            placeholder="Write a message"
            autoComplete="off"
          />
        </form>
        <img
          id="send-btn"
          className="send-btn-fakeChatBot"
          src={send}
          onClick={handleClickSend}
        />
      </div>
    </div>
  );
}
