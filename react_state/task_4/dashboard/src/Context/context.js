import React from "react";

// 🎯 1. Default user
const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

// 🎯 2. Default logOut function
const defaultLogOut = () => {};

// 🎯 3. Create context with default values
const newContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export { defaultUser, defaultLogOut, newContext };