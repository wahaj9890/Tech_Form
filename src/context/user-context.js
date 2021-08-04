import React from "react";

const userContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogIn: () => {},
});

export default userContext;
