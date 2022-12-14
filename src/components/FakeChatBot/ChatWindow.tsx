import React from "react";

export default function ChatWindow(props: any) {
  console.log("This is the prop in chat window:", props.chatWindow);

  return (
    <div className="chat-area-fakeChatBot" key={props.chatWindow}>
      {props.chatWindow.map((line: any) => {
        // BOT MESSAGE
        if (line.from === "bot")
          return (
            <div
              className="bubble-left bubble-bottom-left text-FakeChatBot"
              // key={`messageKey${line}`}
            >
              <p className="message-FakeChatBot">{line.message}</p>
            </div>
          );

        // USER MESSAGE
        if (line.from === "user")
          return (
            <div
              className="bubble-right bubble-bottom-right"
              // key={`messageKey${line}`}
            >
              <p className="message-FakeChatBot">{line.message}</p>
            </div>
          );
        // SYSTEM MESSAGE
        if (line.from === "system")
          return (
            <div
              className="bubble-center "
              // key={`messageKey${line}`}
            >
              <p className="message-FakeChatBot">{line.message}</p>
            </div>
          );
        // BTNS MESSAGE
        if (line.from === "btns") {
          console.log(line);
          return line.listBtns.map((btnText: any) => {
            console.log(btnText);
            <div>
              <button>{btnText}</button>;<p>{btnText}</p>;
            </div>;
          });
        }
        // <button ></button>
      })}
    </div>
  );
}
