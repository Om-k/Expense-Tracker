import React from "react";
import "./HomePageSection4.css";
import { GraphManual } from "./GraphManual";
import "./HomePage.css";

export const HomePageSection4 = ({ checkStart }) => {
  return (
    <div className="mainArea">
      <div className="GraphArea">
        <GraphManual />
        <div className="textInSec4">
          <h1 className="textInSec4Head">Let's Get Going!</h1>
          <div onClick={checkStart} className="myButtonLast">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};
