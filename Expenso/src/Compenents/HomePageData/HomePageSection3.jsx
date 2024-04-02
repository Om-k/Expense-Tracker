import React, { useState, useEffect } from "react";
import "./HomePageSection3.css";
import changingImg1a from "./../../../Images/ChangingImage1a.png";
import changingImg2a from "./../../../Images/ChangingImage2a.png";
import changingImg3a from "./../../../Images/ChangingImage3a.png";

import changingImg1b from "./../../../Images/ChangingImage1b.png";
import changingImg2b from "./../../../Images/ChangingImage2b.png";
import changingImg3b from "./../../../Images/ChangingImage3b.png";

import changingImg1c from "./../../../Images/ChangingImage1c.png";
import changingImg2c from "./../../../Images/ChangingImage2c.png";
import changingImg3c from "./../../../Images/ChangingImage3c.png";

import arrowRight from "./../../../Images/arrowRight.png";
import arrowLeft from "./../../../Images/arrowLeft.png";

export const HomePageSection3 = () => {
  const imgListA = [changingImg1a, changingImg2a, changingImg3a];
  const imgListB = [changingImg1b, changingImg2b, changingImg3b];
  const imgListC = [changingImg1c, changingImg2c, changingImg3c];
  //const imagesList = imgListA; //[changingImg1, changingImg2, changingImg3];

  const [imagesList, setImagesList] = useState(imgListA);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setImagesList(imgListB);
      } else if (window.innerWidth < 800) {
        setImagesList(imgListC);
      } else {
        setImagesList(imgListA);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imgListA, imgListB]);

  const headingList = [
    "Track Your Expenses",
    "Track Your Savings",
    "Get Your Analytics",
  ];
  const textClasses = ["text-overlay1", "text-overlay2", "text-overlay3"];

  const paraList = [
    "Tracking expenses has always been an difficult task for us as wehave other daily activities to take care pf and hence we tend to forget about our expenses. This application acts as your assistant in tracking your expense. It also helps you with yoour savings. You can always check your monthly spending and saving in your profile of any date.",
    "You can always check your analytics in your profile. Here you get the dates of your spendings and savings in a graph. This graph changes based on the month year and savings or spending you set. So make the best of it for your expense tracking.",
    "Savings can always be checked on your analytics in your profile. Here you get the dates of your spendings and savings in a graph. This graph changes based on the month year and savings or spending you set. So make the best of it for your expense tracking.",
  ];

  const [changingPsoition, sethangingPsoition] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");

  //For changing image
  useEffect(() => {
    const timer = setTimeout(() => {
      if (changingPsoition === 2) {
        sethangingPsoition(0);
      } else {
        sethangingPsoition(changingPsoition + 1);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [changingPsoition, sethangingPsoition]);

  //For changing image transition
  useEffect(() => {
    setTransitionClass("fade-in");

    const timeout = setTimeout(() => {
      setTransitionClass("");
    }, 3500);

    return () => clearTimeout(timeout);
  }, [changingPsoition]);

  return (
    <div className="section3">
      <div className="image-container">
        <img
          src={imagesList[changingPsoition]}
          alt=""
          className={`background ${transitionClass}`}
        />
        <div
          className={`TextArea ${textClasses[changingPsoition]} ${transitionClass}`}
        >
          <div className="textAround">
            <h1 className={`headingText`}>{headingList[changingPsoition]}</h1>
            <p className={`paraText ${transitionClass}`}>
              {paraList[changingPsoition]}
            </p>
          </div>
        </div>

        <div className="arrows">
          <img
            src={arrowLeft}
            alt=""
            className="arrowLeft"
            onClick={() => {
              if (changingPsoition === 0) {
                sethangingPsoition(2);
              } else {
                sethangingPsoition(changingPsoition - 1);
              }
            }}
          />
          <img
            src={arrowRight}
            alt=""
            className="arrowRight"
            onClick={() => {
              if (changingPsoition === 2) {
                sethangingPsoition(0);
              } else {
                sethangingPsoition(changingPsoition + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
