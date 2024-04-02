import React from "react";
import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="fullFooter">
      <div className="upperSection">
        <div className="uLeftSection">
          <h1 className="uLeftSectionText">Let's Connect!</h1>
        </div>
        <div className="midLine"></div>
        <div className="uRightSection">
          <div className="linksSection">
            <a
              className="linkTexts"
              href={`mailto:${"om.k.poojary@gmail.com"}`}
            >
              <SiGmail className="linkImages" />
              Email
            </a>
            <a
              className="linkTexts"
              href="https://www.linkedin.com/in/om-k-poojary-58a117203/"
              target="_blank"
            >
              <CiLinkedin className="linkImages" />
              LinkedIn
            </a>

            <a
              className="linkTexts"
              href="https://github.com/Om-k"
              target="_blank"
            >
              <FaGithub className="linkImages" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="lowerSection">Website created by @omkpoojary.</div>
    </div>
  );
};
