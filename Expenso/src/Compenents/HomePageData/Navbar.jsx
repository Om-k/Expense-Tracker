import React, { useState, useContext, useEffect } from "react";
import "./HomePage.css";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import { SideWindow } from "../SideWindowData/SideWindow";
import logoImg from "./../../../Images/Logo.png";
import useStore from "../../../Store/userStore";
import { useNavigate } from "react-router-dom";
import { Footer } from "./FooterSection/Footer";

export const Navbar = () => {
  const navigate = useNavigate();
  const userData = useStore((state) => state.userData);
  const [userDataHere, setUserDataHere] = useState("");

  const [sideWindowClosed, setSideWindowClosed] = useState(true);
  const { handleLogin, checkStart, userEmail, scrollHeight, contactChange } =
    useContext(userDetailsContext);
  const opacity =
    scrollHeight > 250 ? 0.6 : Math.min(0.0 + (scrollHeight / 250) * 0.6, 0.4);

  const getHeight = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 500) {
      return scrollHeight > 500 ? 2.5 : 4 - (scrollHeight * 2) / 500;
    } else {
      return scrollHeight > 500 ? 3.5 : 6 - (scrollHeight * 2) / 500;
    }
  };

  return (
    <div>
      <div
        className="navMain"
        style={{
          height: `${getHeight()}rem`,
          backgroundColor: `rgba(218, 232, 250, ${opacity})`,
          // position: scrollHeight > 50 ? "fixed" : "relative", // Apply position: fixed if isFixed is true
          top: scrollHeight > 50 ? 0 : "auto",
        }}
      >
        <div className="navLeft">
          <div className="slider">
            <div
              className="sliderBackground NavButtons"
              style={{
                backgroundColor: `${
                  scrollHeight > 250
                    ? `rgba(218, 232, 250, 0)`
                    : `rgba(218, 232, 250, 1)`
                }`,
                width: `${scrollHeight > 250 ? `70%` : `50%`}`,
              }}
            >
              <div
                className="sliderImage"
                onClick={() => {
                  setSideWindowClosed(false);
                }}
              ></div>
              <img
                src={logoImg}
                alt=""
                className={scrollHeight > 250 ? "logoOnNav" : "displayNone"}
              />
            </div>
          </div>
        </div>

        <div className="navMid">
          <nav className="navBarTexts navText LoginButtontext">
            <h4
              onClick={() => {
                navigate("/AboutPage");
              }}
              className="navTexsIn"
            >
              About
            </h4>
            <h4
              onClick={() => {
                navigate("/");
              }}
              className="navTexsIn"
            >
              Homepage
            </h4>
            <h4 onClick={checkStart} className="navTexsIn">
              My Profile
            </h4>
          </nav>
        </div>

        <div className="navRight">
          <div
            className="LoginButton NavButtons"
            onClick={handleLogin}
            style={{
              backgroundColor: `${
                scrollHeight > 250
                  ? `rgba(218, 232, 250, 0)`
                  : `rgba(218, 232, 250, 1)`
              }`,
            }}
          >
            <div className="LoginButtontext navTexsIn">
              {userEmail === "" ? <>Log In</> : <>Log Out</>}
            </div>
          </div>
        </div>
      </div>

      <userDetailsContext.Provider
        value={{
          sideWindowClosed,
          setSideWindowClosed,
          handleLogin,
          checkStart,
          userEmail,
          contactChange,
        }}
      >
        <SideWindow />
      </userDetailsContext.Provider>
    </div>
  );
};
