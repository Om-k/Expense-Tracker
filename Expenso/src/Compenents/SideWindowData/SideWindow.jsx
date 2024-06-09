import React, { useContext, useEffect, useRef } from "react";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import "./SideWindow.css";
import LogoWhite from "./../../../Images/LogoWhite.png";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const SideWindow = () => {
  const {
    sideWindowClosed,
    setSideWindowClosed,
    handleLogin,
    checkStart,
    userEmail,
    contactChange,
  } = useContext(userDetailsContext);
  const sideWindowRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sideWindowRef.current &&
        !sideWindowRef.current.contains(event.target) &&
        !event.target.classList.contains("sliderImage")
      ) {
        setSideWindowClosed(true);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setSideWindowClosed]);

  const handleButtonClick = () => {
    setSideWindowClosed(!sideWindowClosed);
  };

  const checkAddData = () => {
    if (userEmail != "") {
      navigate("/AddDataPage");
    } else {
      navigate("/LogIn");
    }
  };

  return (
    <>
      <div
        className={`sideArea ${sideWindowClosed ? "closed" : "open"}`}
        ref={sideWindowRef}
      >
        <div className="header">
          <div className="newButton">
            {/* <IoCloseCircleSharp size={25} /> */}
          </div>
          <img src={LogoWhite} alt="" className="logoSide" />
          <div className="newButton" onClick={handleButtonClick}>
            <IoMdClose size={25} color="#f3f8fe" />
            {/* <IoCloseCircleSharp size={25} color="#f3f8fe" /> */}
          </div>
        </div>
        <div className="textSection2">
          <div onClick={() => {
                navigate("/AboutPage");
              }} className="logOut sideText navTextExtra">
            About<div className="line"></div>
          </div>
          <div  onClick={() => {
                navigate("/");
              }}  className="logOut sideText navTextExtra">
            Homepage<div className="line"></div>
          </div>
          <div onClick={checkStart} className="logOut sideText navTextExtra">
            My Profile<div className="line"></div>
          </div>
          <div
            onClick={checkStart}
            className="mySavings sideText navTextExtra2"
          >
            My Profile
            <div className="line"></div>
          </div>
          <div className="mySpendings sideText">
            How To Use<div className="line"></div>
          </div>
          <div
            onClick={() => {
              contactChange();

              handleButtonClick();
            }}
            className="howToUse sideText"
          >
            Contact<div className="line"></div>
          </div>
          <div className="logOut sideText" onClick={handleLogin}>
            {userEmail === "" ? <>Log In</> : <>Log Out</>}
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div
        onClick={handleButtonClick}
        className={`${sideWindowClosed ? "" : "blurArea"}`}
      ></div>
    </>
  );
};
