import React from "react";
import logo from "./assets/holberton_logo.jpg";
import "./App.css";
import { getCurrentYear, getFooterCopy } from "./utils";
import Notifications from "./Notifications"; // ✅ Import Notifications component

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications /> {/* ✅ Wrapped inside root-notifications */}
      </div>
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;