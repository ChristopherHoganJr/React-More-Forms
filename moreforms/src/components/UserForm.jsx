import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  let newUser = { firstName, lastName, email, password, confirmPassword };
  const createNewUser = (e) => {
    e.preventDefault();
    newUser = { firstName, lastName, email, password, confirmPassword };
    setHasBeenSubmitted(true);
  };

  const firstNameValidation = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First name is required.");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First name must be at least 2 characters!");
    } else {
      setFirstNameError("");
    }
  };

  const lastNameValidation = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last name is required.");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last name must be at least 2 characters!");
    } else {
      setLastNameError("");
    }
  };

  const emailValidation = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email address is required.");
    } else if (e.target.value.length < 5) {
      setEmailError("Email address must be at least 5 characters!");
    } else {
      setEmailError("");
    }
  };

  const passwordValidation = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required.");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters!");
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordValidation = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmPasswordError("Confirm Password is required.");
    } else if (e.target.value.length < 8) {
      setConfirmPasswordError(
        "Confirm Password must be at least 8 characters!"
      );
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <fieldset>
        <legend>Form</legend>
        <form onSubmit={createNewUser}>
          {hasBeenSubmitted ? (
            <h3>Submitted</h3>
          ) : (
            <h3>Has not been submitted</h3>
          )}
          <div>
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              name="firstName"
              onChange={firstNameValidation}
            />
            {firstNameError ? (
              <p style={{ color: "red" }}>{firstNameError}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="lastName" onChange={lastNameValidation} />
            {lastNameError ? (
              <p style={{ color: "red" }}>{lastNameError}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={emailValidation} />
            {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={passwordValidation}
            />
            {passwordError ? (
              <p style={{ color: "red" }}>{passwordError}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={confirmPasswordValidation}
            />
            {confirmPasswordError ? (
              <p style={{ color: "red" }}>{confirmPasswordError}</p>
            ) : (
              ""
            )}
            {confirmPassword.length >= 8 && password != confirmPassword ? (
              <p style={{ color: "red" }}>Passwords do not match</p>
            ) : (
              ""
            )}
          </div>
          <input type="submit" value="Create User" />
        </form>
      </fieldset>
      <fieldset>
        <legend>Form Data</legend>
        <p>First name: {newUser.firstName}</p>
        <p>Last name: {newUser.lastName}</p>
        <p>Email: {newUser.email}</p>
        <p>Password: {newUser.password}</p>
        <p>Confirm Password: {newUser.confirmPassword}</p>
      </fieldset>
    </>
  );
};

export default UserForm;
