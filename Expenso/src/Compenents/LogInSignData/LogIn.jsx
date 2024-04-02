import React, { useState, useContext } from "react";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import useStore from "../../../Store/userStore";

export const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setUserEmail } = useContext(userDetailsContext);
  const [userDoesntExist, setUserDoesntExist] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/LogIn", { email, password })
      .then((result) => {
        // console.log(result);
        if (result.data === "Success") {
          //useStore.setState({ userData: { email: email } });
          //localStorage.setItem("userEmail", email);
          setUserEmail(email);
          navigate("/");
        } else {
          setUserDoesntExist(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Logo />

      <div className="login-form-container">
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="loginHeaderSection">
              <h2 className="text">Log In</h2>
              <p className="text small_text">Enter Your Details</p>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Username/Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                onClick={() => {
                  navigate("/EnterEmailPage");
                }}
                className="text small_text forgotPasswordText"
              >
                Forgot Password?
              </p>
            </div>
            <div className="ButtonArea">
              <button type="submit" className="submitButton">
                Login
              </button>
            </div>
          </form>
          <Link to="/SignUp" className="formBelowText text">
            <p>New Here? SignUp</p>
          </Link>

          {userDoesntExist && (
            <div to="/SignUp" className="formBelowText text">
              <p>Invalid Email or Password</p>
            </div>
          )}
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
