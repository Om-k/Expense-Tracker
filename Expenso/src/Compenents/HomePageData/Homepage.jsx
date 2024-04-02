import React, { useState, useContext, useEffect, useRef } from "react";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { HomePageSection2 } from "./HomePageSection2";
import { Navbar } from "./Navbar";
import LightRect from "./../../../Images/LightRect.png";
import DarkReact from "./../../../Images/DarkRect.png";
import { SideWindow } from "../SideWindowData/SideWindow";
import { HomePageSection3 } from "./HomePageSection3";
import { Footer } from "./FooterSection/Footer";
import { HomePageSection4 } from "./HomePageSection4";
import { GraphManual } from "./GraphManual";
import useStore from "../../../Store/userStore";

export const Homepage = () => {
  const navigate = useNavigate();
  const { userEmail } = useContext(userDetailsContext);
  const { setUserEmail } = useContext(userDetailsContext);
  const { goToFooter } = useContext(userDetailsContext);
  const { setGoToFooter } = useContext(userDetailsContext);
  const [scrollHeight, setScrollHeight] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);

  const contactChange = () => {
    navigate("/");
    setGoToFooter(true);
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollHeight(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogin = () => {
    if (userEmail != "") {
      setUserEmail("");
    } else {
      navigate("/LogIn");
    }
  };

  const checkStart = () => {
    if (userEmail != "") {
      navigate("/AnalyticsPage");
    } else {
      navigate("/LogIn");
    }
  };
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (goToFooter) {
      scrollToFooter();
      setGoToFooter(false);
    }
  }, [goToFooter]);

  return (
    <div>
      {/* <div className='scrollCheck'>
      {isScrolled ? (
        <p>This is shown after scrolling for a while</p>
      ) : (
        <p>This is shown initially</p>
      )}
    </div> */}
      <userDetailsContext.Provider
        value={{
          handleLogin,
          checkStart,
          userEmail,
          scrollHeight,
          setGoToFooter,
          contactChange,
        }}
      >
        <Navbar />
      </userDetailsContext.Provider>

      <div className="navMain2"></div>
      <div className="section1">
        <div className="sideSection">
          {/* <div className="graphImage"></div> */}
          {isLoaded ? (
            <GraphManual />
          ) : (
            <div className="graphManual">
              <div className="graphGroup">
                <img
                  src={LightRect}
                  alt=""
                  className="graphBlock"
                  style={{ width: "8em" }}
                />
                <img
                  src={DarkReact}
                  alt=""
                  className="graphBlock"
                  style={{ width: "11em" }}
                />
              </div>
              <div className="graphGroup">
                <img
                  src={LightRect}
                  alt=""
                  className="graphBlock"
                  style={{ width: "14em" }}
                />
                <img
                  src={DarkReact}
                  alt=""
                  className="graphBlock"
                  style={{ width: "9em" }}
                />
              </div>
              <div className="graphGroup">
                <img
                  src={LightRect}
                  alt=""
                  className="graphBlock"
                  style={{ width: "12em" }}
                />
                <img
                  src={DarkReact}
                  alt=""
                  className="graphBlock"
                  style={{ width: "7em" }}
                />
              </div>

              <div className="graphGroup">
                <img
                  src={LightRect}
                  alt=""
                  className="graphBlock"
                  style={{ width: "10em" }}
                />
                <img
                  src={DarkReact}
                  alt=""
                  className="graphBlock"
                  style={{ width: "12em" }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="logoSectionBackground">
          <div className="logoSection">
            <div className="pageLogo"></div>
            <h1 className="pageTitle">Expenso</h1>
            <div className="pageSubTitleGroup">
              <div className="pageSubTitleLeft"></div>
              <h1 className="pageSubTitle">TRACK YOUR EXPENSE</h1>
              <div className="pageSubTitleLeft"></div>
            </div>
            <button
              onClick={() => {
                checkStart();
                //</div>scrollToFooter();
              }}
              className="myButtonArea myBottonVariation"
            >
              <h5 className="getStartedButton">Get Started</h5>
            </button>
          </div>
        </div>

        <div className="extraSection">
          <h2></h2>
        </div>
      </div>

      <HomePageSection2 />
      <HomePageSection3 />
      <HomePageSection4 checkStart={checkStart} />
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};
