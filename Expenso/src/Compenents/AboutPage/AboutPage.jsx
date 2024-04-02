import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AboutPage.css";
import { Navbar } from "../HomePageData/Navbar";

const AboutPage = () => {
  const navigate = useNavigate();
  const { userEmail } = useContext(userDetailsContext);
  const { setUserEmail } = useContext(userDetailsContext);
  const { setGoToFooter } = useContext(userDetailsContext);
  const [scrollHeight, setScrollHeight] = useState(0);

  const contactChange = () => {
    navigate("/");
    setGoToFooter(true);
  };

  const checkStart = () => {
    if (userEmail != "") {
      navigate("/AnalyticsPage");
    } else {
      navigate("/LogIn");
    }
  };

  const handleLogin = () => {
    if (userEmail != "") {
      setUserEmail("");
    } else {
      navigate("/LogIn");
    }
  };

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

  return (
    <>
      <userDetailsContext.Provider
        value={{
          handleLogin,
          checkStart,
          userEmail,
          scrollHeight,
          contactChange,
        }}
      >
        <Navbar />
      </userDetailsContext.Provider>

      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h1 className="h1About">About Expenso</h1>
            <p className="about-description">
              Welcome to Expenso, a modern web application designed to help you
              track your expenses efficiently. Our goal is to provide you with a
              user-friendly platform where you can manage your finances
              hassle-free.
            </p>
          </div>

          <div className="about-section">
            <h2 className="h2About">Motivation</h2>
            <p>
              The idea for Expense Tracker stemmed from my own experiences with
              managing finances as a student. I had realized the importance of
              having a tool that simplifies expense tracking and empowers users
              to make informed financial decisions.
            </p>
          </div>

          <div className="about-section">
            <h2 className="h2About">Features</h2>
            <ul className="ulAbout">
              <li className="liAbout">Record and categorize expenses</li>
              <li className="liAbout">View expense reports in graph</li>
              <li className="liAbout">
                Track your expense and savings based on a year or month
              </li>
              <li className="liAbout">
                Responsive design for seamless experience on all devices
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h2 className="h2About">Development Process</h2>
            <p>
              I have followed an agile development approach, iterating on
              features based on user feedback and continuously improving the
              application. The project is leveraging the power of the MERN stack
              (MongoDB, Express.js, React.js, Node.js) to build a robust and
              scalable solution.
            </p>
          </div>

          <div className="about-section">
            <h2 className="h2About">Contact Us</h2>
            <p>
              Have questions or feedback? We'd love to hear from you! Reach out:
              <p
                onClick={() => {
                  contactChange();
                }}
                className="aAbout contactHere"
              >
                Here
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
