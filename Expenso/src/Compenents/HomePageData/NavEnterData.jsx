import React, { useState, useContext } from "react";
import "./HomePage.css";
import "./NavbarAn.css";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import { SideWindow } from "../SideWindowData/SideWindow";
import logoImg from "./../../../Images/Logo.png";
import { Logo } from "./../Logo/Logo";
import { useNavigate } from "react-router-dom";

export const NavEnterData = () => {
  const navigate = useNavigate();
  const [sideWindowClosed, setSideWindowClosed] = useState(true);

  const checkAddData = () => {
    navigate("/AddDataPage");
  };

  return (
    <div>
      <div
        className="navMainAn"
        style={{
          height: `4.5rem`,
          backgroundColor: `rgba(218, 232, 250, 1)`, // Fixed background color
        }}
      >
        <div className="navLeftAn">
          <div className="sliderAn">
            <div className="sliderBackground NavButtons">
              <div
                className="sliderImage"
                onClick={() => {
                  setSideWindowClosed(false);
                }}
              >
                <img src={logoImg} alt="" className="logoOnNavAn" />
              </div>
            </div>
            <div className="LogoOnTopAn">
              <Logo />
            </div>
          </div>
        </div>

        <div className="navMidAn">
          <nav className="navBarTextsAn navText LoginButtontext">
            <h1 className="navTexsInAn">Analytics</h1>
            <div className="lineAn"></div>
          </nav>
        </div>

        <div className="navRight">
          <div className="LoginButton NavButtons" onClick={checkAddData}>
            <div className="LoginButtontext navTexsIn">Add Data</div>
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
