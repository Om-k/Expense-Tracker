import React, { useState, useEffect, useRef } from "react";
import "./HomePageSection2.css";
import moneySave from "./../../../Images/MoneySave.png";
import graphNew from "./../../../Images/GraphSection2.png";
import { SideWindow } from "../SideWindowData/SideWindow";

export const HomePageSection2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(textAreaRef.current);

    return () => {
      if (textAreaRef.current) {
        observer.unobserve(textAreaRef.current);
      }
    };
  }, []);

  return (
    <div className="mainBackground">
      <div className="firstTextSection">
        <div className="imgSection">
          <img src={moneySave} alt="" className="moneySaveImage" />
        </div>
        <div className="textSection">
          <div
            ref={textAreaRef}
            className={`textArea ${isVisible ? "animate" : "shouldNotView"}`}
          >
            <h1 className="textHeading">What Is Expenso?</h1>
            <p className="textPara">
              Expenso is a expense tracking web applicaton which allows you to
              track your expense by naming them and keeping a record. It also
              keeps track of money that you have been saving.
            </p>
          </div>
        </div>
      </div>
      <div className="secondTextSection">
        <div className="textSection">
          <div
            ref={textAreaRef}
            className={`textArea ${isVisible ? "animate2" : "shouldNotView"}`}
          >
            <h1 className="textHeading">Why Use Expenso?</h1>
            <p className="textPara">
              Expenso stores your records on why you have spent your money. It
              also gives you your analytics of savings and spends so you can
              keep track of your money.
            </p>
          </div>
        </div>
        <div className="imgSection">
          <img src={graphNew} alt="" className="graphNewImage" />
        </div>
      </div>
    </div>
  );
};
