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
              className="bubble-left bubble-bottom-left"
              // key={`messageKey${line}`}
            >
              <p className="message-FakeChatBot">{line.message}</p>
            </div>
          );

        // NOT BOT MESSAGE
        return (
          <div
            className="bubble-right bubble-bottom-right"
            // key={`messageKey${line}`}
          >
            <p className="message-FakeChatBot">{line.message}</p>
          </div>
        );
      })}
    </div>
  );
}
