import React, { useState, useEffect } from "react";
import { useAuth } from "../context/index"
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/index";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const { loginHandler, token } = useAuth();

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [token]);

  function guestLogin() {
    setLoginDetails({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
    loginHandler("adarshbalika@gmail.com", "adarshBalika123");
  }

  return (
    <>
      <NavBar/>
      <form
        action="submit"
        className="login-container"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(loginDetails.email, loginDetails.password);
        }}
      >
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              className="input input-primary"
              type="text"
              placeholder="Type Email"
              id="email"
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
            <label htmlFor="Password">Password</label>
            <input
              className="input input-primary"
              type="password"
              placeholder="Type Password"
              id="password"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
            <a href="../">Forgot password?</a>
          </div>
          <div className="login-btn">
            <button className="btn btn-secondary" type="submit">
              Login
            </button>
            <button className="btn btn-secondary" onClick={guestLogin}>
              Login as Guest
            </button>
          </div>
          <p className="no-account">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </>
  );
}

export { Login };
