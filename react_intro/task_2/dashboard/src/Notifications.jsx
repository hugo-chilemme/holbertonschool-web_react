import React from "react";
import closeIcon from "./assets/close-icon.png"; // Ensure the correct path
import { getLatestNotification } from "./utils";

function Notifications() {
  return (
    <div className="notifications" style={{ 
      border: "1px solid #ccc", 
      padding: "10px", 
      position: "relative", 
      width: "fit-content" 
    }}>
      <button 
        style={{ 
          position: "absolute", 
          top: "10px", 
          right: "10px", 
          background: "transparent", 
          border: "none", 
          cursor: "pointer" 
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="Close" style={{ width: "10px", height: "10px" }} />
      </button>
      
      <p>Here is the list of notifications</p>
      
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;