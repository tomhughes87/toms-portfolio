import React, { useState } from "react";
import "./index.css";
import NotificationBar from './NotificationBar'
   
export default function NotificationBarParent() {
    const [barShown,toggleBar] = useState(true)

    const closeBar = () => {
        console.log("Close button clicked");
        toggleBar(false)
    }
 
    return (
        <>
            <NotificationBar
                shown={barShown}
                close={closeBar}
            />
        </>
    );
}
