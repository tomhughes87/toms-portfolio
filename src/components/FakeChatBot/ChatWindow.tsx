import React from "react";

export default function ChatWindow(props: any) {
  return (
    <div className="chat-area-fakeChatBot">
      {props.chatWindow.map((line: any) => (
        <div className="bubble bubble-bottom-left" key={`messageKey${line}`}>
          <p className="message-FakeChatBot">{line}</p>
        </div>
      ))}
    </div>
  );
}
