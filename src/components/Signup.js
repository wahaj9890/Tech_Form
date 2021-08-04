import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useValidate from "../hooks/use-validate";
import { setUsersInStorage } from "./localStorage";
import { creatUserInLocalStorage } from "./localStorage";
const emailRexg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRexg = /^[0-9\b]+$/;
const passwordRexg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6}$/;

const Signup = () => {
  const history = useHistory();
  const {
    value: firstName,
    isValid: isFirstNameValid,
    error: hasFirstNameError,
    valueChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
  } = useValidate((value) => value !== "");

  const {
    value: lastName,
    isValid: isLastNameValid,
    error: hasLastNameError,
    valueChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
  } = useValidate((value) => value !== "");

  const {
    value: email,
    isValid: isEmailValid,
    error: hasEmailError,
    valueChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
  } = useValidate((value) => emailRexg.test(value));

  const {
    value: phone,
    isValid: isPhoneValid,
    error: hasPhoneError,
    valueChangeHandler: phoneChangeHandler,
    onBlurHandler: phoneBlurHandler,
  } = useValidate((value) => phoneRexg.test(value));

  const {
    value: password,
    isValid: isPasswordValid,
    error: hasPasswordError,
    valueChangeHandler: passwordChangeHandler,
    onBlurHandler: passwordBlurHandler,
  } = useValidate((value) => passwordRexg.test(value));

  const {
    value: confirmPassword,
    isValid: isConPasswordValid,
    error: hasConPasswordError,
    valueChangeHandler: conPasswordChangeHandler,
    onBlurHandler: conPasswordBlurHandler,
  } = useValidate((value) => value === password);

  const {
    value: type,
    isValid: isTypeValid,
    error: hasTypeError,
    valueChangeHandler: typeChangeHandler,
    onBlurHandler: typeBlurHandler,
  } = useValidate((value) => value !== "Select-type");

  let formIsValid = false;
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPasswordValid &&
    isConPasswordValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      const UserData = {
        firstName,
        lastName,
        type,
        email,
        phone,
        password,
        confirmPassword,
        id: Math.random().toString(36).substring(2, 15),
      };

      setUsersInStorage(UserData);
    }
    history.push("/");
  };

  return (
    <section className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-secondary text-center text-white">
                <h2 className="">Regitration</h2>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={onSubmitHandler} encType="multipart/form-data">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      placeholder="First Name"
                      className="form-control"
                      onChange={firstNameChangeHandler}
                      onBlur={firstNameBlurHandler}
                    />
                    {hasFirstNameError && (
                      <small className="text-danger">
                        First Name cannot be Empty
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      placeholder="Last Name"
                      className="form-control"
                      onChange={lastNameChangeHandler}
                      onBlur={lastNameBlurHandler}
                    />
                    {hasLastNameError && (
                      <small className="text-danger">
                        Last Name cannot be Empty
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      className="form-control"
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                    />
                    {hasEmailError && (
                      <small className="text-danger">Invalid Email!</small>
                    )}
                  </div>

                  <div className="form-group">
                    <select
                      class="form-control"
                      value={type}
                      id="exampleFormControlSelect1"
                      onChange={typeChangeHandler}
                      onBlur={typeBlurHandler}
                      name="type"
                    >
                      <option value="Select-type">Select type</option>
                      <option value="user">User</option>
                      <option value="Admin">Admin</option>
                    </select>

                    {hasTypeError && (
                      <small className="text-danger">Please Select Type</small>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      placeholder="Phone"
                      className="form-control"
                      onChange={phoneChangeHandler}
                      onBlur={phoneBlurHandler}
                    />
                    {hasPhoneError && (
                      <small className="text-danger">Invalid Phone no!</small>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      className="form-control"
                      onChange={passwordChangeHandler}
                      onBlur={passwordBlurHandler}
                    />
                    {hasPasswordError && (
                      <small className="text-danger">
                        Password must have 6 char , atleast 1 special char & 1
                        digit{" "}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={conPasswordChangeHandler}
                      onBlur={conPasswordBlurHandler}
                    />
                    {hasConPasswordError && (
                      <small className="text-danger">
                        Password Does Not Match...!
                      </small>
                    )}
                  </div>

                  <div>
                    <button
                      className="btn-outline-success btn-sm"
                      disabled={!formIsValid}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
