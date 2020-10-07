import React from "react";
import Fade from "react-reveal/Fade";

import information from "../../utils/structure.json";

import NavBar from "../../components/navBar/NavBar";

import "./StudiesPage.scss";

function StudiesPage() {
  return (
    <div className="studies-page">
      <div className="studies-page_title">
        <Fade left>
          <h2 className="studies-page_title-h2">{information.studies.title}</h2>
        </Fade>
        <NavBar />
      </div>
      <div className="studies-page_description">
        {information.studies.description.map((study, index) => {
          return (
            <div className="studies-page_description-div">
              <Fade left>
                <h3>{study.name}</h3>
              </Fade>
              <p>{study.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudiesPage;
