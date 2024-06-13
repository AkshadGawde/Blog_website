import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form">
          <p className="form__error-message">This is an error message</p>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            {" "}
            Register{" "}
          </button>
        </form>
        <small>
          Don't have an account ? <Link to="/register">Sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
