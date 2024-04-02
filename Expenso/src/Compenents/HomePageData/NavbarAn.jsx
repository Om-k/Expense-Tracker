import React, { useState, useContext, useEffect } from "react";
import "./HomePage.css";
import "./NavbarAn.css";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import { SideWindow } from "../SideWindowData/SideWindow";
import logoImg from "./../../../Images/Logo.png";
import { Logo } from "./../Logo/Logo";
import { useNavigate } from "react-router-dom";

export const NavbarAn = () => {
  const navigate = useNavigate();
  const [sideWindowClosed, setSideWindowClosed] = useState(true);
  const { scrollHeight, setAddDataVisible } = useContext(userDetailsContext);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
  const [isWideScreen2, setIsWideScreen2] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 800);
      setIsWideScreen2(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize); // Clean up the event listener
  }, []);

  const navbarStyle = isWideScreen
    ? {
        height: `3.6rem`,
        top: scrollHeight > 50 ? 0 : "auto",
      }
    : {};

  const opacity =
    scrollHeight > 250 ? 0.6 : Math.min(0.0 + (scrollHeight / 250) * 0.6, 0.4);

  const getHeight = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 500) {
      return scrollHeight > 1300 ? 2.5 : 4 - (scrollHeight * 2) / 500;
    } else {
      return scrollHeight > 1300 ? 3.5 : 9 - (scrollHeight * 2) / 500;
    }
  };

  const checkAddData = () => {
    navigate("/AddDataPage");
  };

  return (
    <div>
      <div className="navMainAn" style={navbarStyle}>
        <div className="navLeftAn">
          <div className="sliderAn">
            <div className="sliderBackgroundAn1 NavButtons sliderBackgroundAn">
              <div
                className="sliderImage"
                onClick={() => {
                  setSideWindowClosed(false);
                }}
              >
                <img
                  src={logoImg}
                  onClick={() => navigate("/")}
                  alt=""
                  className="logoOnNavAn"
                />
              </div>
            </div>
            {/* <div className={scrollHeight > 250 ? "displayNone" : "LogoOnTopAn"}>
              <Logo />
            </div> */}
          </div>
        </div>

        <div className="navMidAn">
          <nav className="navBarTextsAn navText LoginButtontext ">
            <h1 className={scrollHeight > 250 ? "displayNone" : "navTexsInAn "}>
              Analytics
            </h1>
            {/* <div
              className={scrollHeight > 250 ? "displayNone" : "lineAn"}
            ></div> */}
          </nav>
        </div>

        <div className="navRight">
          <div
            className="LoginButton NavButtons AddButtontext"
            // style={{
            //   backgroundColor: `rgba(218, 232, 250, 0)`,
            // }}
          >
            <div
              onClick={() => {
                setAddDataVisible(true);
              }}
              className="LoginButtontext navTexsIn navTextNew"
            >
              Add Data
            </div>
          </div>
        </div>
      </div>

      <userDetailsContext.Provider
        value={{ sideWindowClosed, setSideWindowClosed }}
      >
        <SideWindow />
      </userDetailsContext.Provider>
    </div>
  );
};
