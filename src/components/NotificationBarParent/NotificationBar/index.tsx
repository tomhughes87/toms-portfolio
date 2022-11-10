import React from "react";

interface propTypes {
  shown: boolean;
  close: any;
}

function loadLinkedIn() {
  console.log('clicked')
  // href="" target="_blank"
  window.open("", "_blank");


}


export default function NotificationBar({ shown, close }: propTypes) {
  return shown ? (
    <>
        <div id="NotificationBarContainer">
          <a id="NotificationBarText"  href="http://www.linkedin.com/in/tomhughes87" target="_blank">
          {/* <a id="NotificationBarText"  href="http://www.linkedin.com/in/tomhughes87" > */}
            <strong>Open to work!  </strong> - Click here to find me on   <strong>LinkedIn</strong> -
          </a>
        </div>
        <div id="NotificationBarCloseBtn" onClick={close}>
          <p>x</p>
        </div>
    </>
  ) : null;
}
