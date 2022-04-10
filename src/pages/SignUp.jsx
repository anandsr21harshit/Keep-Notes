import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "../components/index";
import { useAuth } from "../context";
import "../css/signup.css";
function SignUp() {
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const {token,signUpHandler} = useAuth();

  const navigate = useNavigate()

  useEffect(()=>{
      if(token){
          console.log(token)
          setTimeout(()=>{
            navigate("/home")
          },1000)
      }
  },[token])

  function signUp(userDetails){
    const {fname, lname, email, password} = userDetails;
    signUpHandler(email,password,fname,lname);
  }

  return (
    <>
      <NavBar />
      <section className="login-container">
        <div className="login-card">
          <h1 className="login-title">SignUp</h1>
          <div className="input-container">
            <label htmlFor="user-fName">First Name</label>
            <input
            required = {true}
              className="input input-primary"
              type="text"
              value={userDetails.fname}
              placeholder="Type Username"
              onChange={(e) => setUserDetails(userDetails => {
                  return {
                      ...userDetails,
                    fname: e.target.value
                  }
              })}
            />

            <label htmlFor="user-lName">Last Name</label>
            <input
            required={true}
              className="input input-primary"
              type="text"
              placeholder="Type Username"
              value={userDetails.lname}
              onChange = { e => setUserDetails(userDetails => {
                  return {
                      ...userDetails,
                      lname: e.target.value
                  }
              })}
            />

            <label htmlFor="userName">Email</label>
            <input
              className="input input-primary"
              type="email"
              required={true}
              placeholder="Type Email"
              id="Email"
              value={userDetails.email}
              onChange = {e => setUserDetails(userDetails => {
                  return {
                      ...userDetails,
                      email: e.target.value
                  }
              })}
            />

            <label htmlFor="Password">Password</label>
            <input
              className="input input-primary"
              type="password"
              required= {true}
              placeholder="Type Password"
              value={userDetails.password}
              onChange = {e => setUserDetails(userDetails => {
                  return{
                      ...userDetails,
                      password: e.target.value
                  }
              })}
            />

            <label htmlFor="Password">Confirm Password</label>
            <input
              className="input input-primary"
              type="password"
              placeholder="Type Password"
              value={userDetails.confirmPassword}
              onChange = {e => setUserDetails(userDetails => {
                  return {
                      ...userDetails,
                      confirmPassword: e.target.value
                  }
              })}
            />
          </div>
          <button className="btn btn-secondary" onClick={() => signUp(userDetails)}>SIGNUP</button>
          <p className="have-account">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export { SignUp };
