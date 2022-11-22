import React from "react";

export default function ChatWindow(props: any) {
  console.log(props.chatWindow);

  return (
    <div className="chat-area-fakeChatBot">
      {/* <FillChat chatWindow={ChatWindow} /> */}

      {props.chatWindow.map((line: any) => {
        if (line.from === "bot")
          return (
            <div
              className="bubble-left bubble-bottom-left"
              // key={`messageKey${line}`}
            >
              <p className="message-FakeChatBot">{line.message}</p>
            </div>
          );
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

// export function FillChat(props: any) {
//   props.chatWindow.map((line: any) => {
//     // <>

//     if (line.from === "bot") {
//       return (
//         <div
//           className="bubble-left bubble-bottom-left"
//           // key={`messageKey${line}`}
//         >
//           <p className="message-FakeChatBot">{line.message}</p>
//         </div>
//       );
//     } else {
//       return (
//         <div
//           className="bubble-right bubble-bottom-right"
//           // key={`messageKey${line}`}
//         >
//           <p className="message-FakeChatBot">{line.message}</p>
//         </div>
//       );
//     }
//   });
//   return;
// }
// </>
