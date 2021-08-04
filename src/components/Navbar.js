import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/user-context";
const Navbar = () => {
  const ctx = useContext(userContext);
  return (
    <nav className="navbar navbar-expand-sm bg-teal navbar-dark">
      <div className="container">
        <div
          className="navbar-toggler"
          data-target="#my-menu"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </div>

        <div className="navbar-collapse collapse" id="my-menu">
          <ul className="navbar-nav profile">
            <li className=" nav-item m-2 font-weight-bold">
              {!ctx.isLoggedIn && (
                <Link to="/" className="nav-link">
                  Login
                </Link>
              )}
            </li>
            <li className=" nav-item m-2 font-weight-bold">
              {ctx.isLoggedIn && (
                <Link to="/" className="nav-link">
                  LogOut
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
