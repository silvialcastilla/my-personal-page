import React from "react";
import information from "../utils/structure.json";

import NavBar from "../components/navBar/NavBar";

function Experience() {
  return (
    <div className="experience-page">
      <div className="experience-page_title">
        <h2 className="experience-page_title-h2">
          {information.experience.title}
        </h2>
        <NavBar />
      </div>
      <div className="experience-page_description">
        {information.experience.description.map((experience, index) => {
          return (
            <div>
              <h3>{experience.name}</h3>
              <p>{experience.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
