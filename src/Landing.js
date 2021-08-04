import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import userContext from "./context/user-context";
const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLogout = () => {
    setIsLoggedIn(true);
  };
  const onLogIn = () => {
    setIsLoggedIn(false);
  };
  return (
    <userContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: onLogout, onLogIn: onLogIn }}
    >
      <Navbar />
      <div className="container">
        <Route path="/" component={Login} exact></Route>
        <Route path="/SignUp" component={Signup}></Route>
        <Route path="/DashBoard/:id/:type" component={Dashboard}></Route>
      </div>
    </userContext.Provider>
  );
};

export default Landing;
