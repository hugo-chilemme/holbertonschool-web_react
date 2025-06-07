import React from "react";
import logo from "./assets/holberton_logo.jpg"; // Vérifie bien le chemin
import "./Header.css";

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="Holberton Logo" />
      <h1>School Dashboard</h1>
    </div>
  );
}

export default Header;
