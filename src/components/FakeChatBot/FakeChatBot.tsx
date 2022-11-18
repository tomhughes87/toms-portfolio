import React, { useEffect, useState } from "react";
import "./styles.css";
import robot from "./robot-profile.png";
import arrow from "./open-close-icon.png";

export default function FakeChatBot() {
  const chatRecord = [
    "Hi there",
    "My name is a.a.i. I am Artifical a.i",
    "Tom has create me to help you understand his skills",
    "I'm looking forward to chatting to you more ... once Tom stops drinking and gaming and pulls his f-ing socks up",
  ];

  const [chatTitle, setChatTitle] = useState("hey there!");
  const [chatText, setChatText] = useState(
    "Click something!... not too much though"
  );

  function clickInfoToBot() {}

  useEffect(() => {
    const watchLogos = document.getElementsByClassName("logo");
    //   console.log(watchLogos);

    for (let i = 0; i < watchLogos.length; i++) {
      // const element = watchLogos[i];
      console.log("THINGS:", watchLogos[i].children[2].innerHTML);
      watchLogos[i].addEventListener("click", () => {
        console.log("Logo clicked:");
        // setChatText()
        setChatTitle(watchLogos[i].children[2].innerHTML);
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
          <p className="username-fakeChatBot">A.A.I (Artificial A.I)</p>
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

      <div>
        <input type="text" disabled placeholder="A.A.I has disable you chat" />
      </div>
    </div>
  );
}
