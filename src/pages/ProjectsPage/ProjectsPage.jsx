import React from "react";
import Fade from "react-reveal/Fade";
import information from "../../utils/structure.json";
import Slide from "react-reveal/Slide";

import NavBar from "../../components/navBar/NavBar";
import "./ProjectsPage.scss";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <Slide bottom>
        <div className="projects-page_title">
          <Fade left>
            <h2 className="projects-page_title-h2">
              {information.projects.title}
            </h2>
          </Fade>
          <NavBar />
        </div>
        <div className="projects-page_description">
          {information.projects.description.map((projects, index) => {
            return (
              <div className="projects-page_description-div">
                <h3>{projects.name}</h3>
                <p>{projects.description}</p>
              </div>
            );
          })}
        </div>
      </Slide>
    </div>
  );
}

export default ProjectsPage;
