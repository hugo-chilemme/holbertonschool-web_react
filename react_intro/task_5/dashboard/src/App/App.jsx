import React from "react";
import logo from "../assets/holberton_logo.jpg"; // ✅ Updated path
import "./App.css"; // ✅ App-specific styles
import { getCurrentYear, getFooterCopy } from "../utils/utils"; // ✅ Updated path
import Notifications from "../Notifications/Notifications"; // ✅ Updated path

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        
        {/* ✅ Login Form */}
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;