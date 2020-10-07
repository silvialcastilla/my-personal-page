import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import information from "../../utils/structure.json";

import NavBar from "../../components/navBar/NavBar";

import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="about-page">
      <Slide bottom>
        <div className="about-page_title">
          <Fade left>
            <h2 className="about-page_title-h2">{information.about.title}</h2>
          </Fade>
          <NavBar />
        </div>
        <div className="about-page_description">
          <p>{information.about.description}</p>
        </div>
      </Slide>
    </div>
  );
}

export default AboutPage;
