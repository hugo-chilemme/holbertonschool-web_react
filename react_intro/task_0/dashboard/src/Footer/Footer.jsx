import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="App-footer">
        <p>Copyright {new Date().getFullYear()} - Holberton School</p>
    </div>
  );
}

export default Footer;