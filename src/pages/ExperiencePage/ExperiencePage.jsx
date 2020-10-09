import React from "react";
import information from "../../utils/structure.json";
import Slide from "react-reveal/Slide";

import NavBar from "../../components/navBar/NavBar";
import "./ExperiencePage.scss";

function Experience() {
  return (
    <div className="experience-page">
      <Slide bottom>
        <div className="experience-page_title">
          <h2 className="experience-page_title-h2">
            {information.experience.title}
          </h2>
          <NavBar />
        </div>
        <div className="experience-page_description">
          {information.experience.description.map((experience, index) => {
            return (
              <div className="experience-page_description-div" key={index}>
                <h3>{experience.name}</h3>
                <p>{experience.description}</p>
              </div>
            );
          })}
        </div>
      </Slide>
    </div>
  );
}

export default Experience;
