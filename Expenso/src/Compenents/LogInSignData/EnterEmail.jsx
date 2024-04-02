import React, { useState, useContext } from "react";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import useStore from "../../../Store/userStore";

export const EnterEmail = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const { setUserEmail } = useContext(userDetailsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Logo />

      <div className="login-form-container">
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="loginHeaderSection">
              <h2 className="text">Forgot Password?</h2>
              <p className="text small_text">Enter Your Email</p>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text small_text forgotPasswordText">
                Forgot Password?
              </p>
            </div> */}
            <div className="ButtonArea">
              <button type="submit" className="submitButton">
                Enter
              </button>
            </div>
          </form>
          <div className="formBelowText text">
            <p>New Here? SignUp</p>
          </div>
        </div>
      </div>

      <div className="SignUpFooterContainerMain">
        <div className="SignUpFooterContainer">
          <div className="SignUpFooter">
            <h5 className="text SignUpFooterText">Help</h5>
            <h5 className="text SignUpFooterText">Feedback</h5>
            <h5 className="text SignUpFooterText">Contact</h5>
          </div>
        </div>
      </div>
    </>
  );
};
