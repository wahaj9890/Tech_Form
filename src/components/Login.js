import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { getUsersFromStorage } from "./localStorage";
import userContext from "../context/user-context";

const Login = () => {
  const ctx = useContext(userContext);
  const history = useHistory();
  const [userData, setuserData] = useState([]);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("user"));
    setuserData(temp);
    ctx.onLogIn();
  }, []);

  const onChangeHandler = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userData !== null) {
   
      const userDetails = userData.filter(
        (user) => user.email === userLogin.email
      );
      
      if (userDetails.length != 0) {
        ctx.onLogout();
        history.push(`DashBoard/${userDetails[0].id}/${userDetails[0].type}`);
      } else {
        alert("Please Enter Valid Credential");
      }
    } else {
      alert("Please SignUp first");
      history.push("/SignUp");
    }
  };

  return (
    <section className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3"> </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-secondary text-white text-center">
                <h2> Log In </h2>
              </div>
              <div className="card-body bg-light">
                <form action="" onSubmit={onSubmitHandler}>
                  <div className="form-group ">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      value={userLogin.email}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      name="password"
                      value={userLogin.password}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="submit"
                      className="btn btn-outline-primary btn-sm"
                      value="Login"
                    />
                  </div>
                </form>
                <div className="text-center">
                  <span className="text-muted">
                    Not a member ? <NavLink to="/SignUp"> Sign up now </NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"> </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
