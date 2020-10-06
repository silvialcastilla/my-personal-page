import React from "react";
import information from "../utils/structure.json";
import NavBar from "../components/navBar/NavBar";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page_title">
        <h2 className="about-page_title-h2">{information.about.title}</h2>
        <NavBar />
      </div>
      <div className="about-page_description">
        <p>{information.about.description}</p>
      </div>
    </div>
  );
}

export default AboutPage;
