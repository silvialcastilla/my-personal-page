import React from "react";
import Fade from "react-reveal/Fade";
import information from "../../utils/structure.json";

import NavBar from "../../components/navBar/NavBar";
import "./KnowandprojectsPage.scss";

function KnowandprojectsPage() {
  return (
    <div className="knowandprojects-page">
      <div className="knowandprojects-page_title">
        <Fade left>
          <h2 className="knowandprojects-page_title-h2">
            {information.kwnoledgesandprojects.title}
          </h2>
        </Fade>
        <NavBar />
      </div>
      <div className="knowandprojects-page_description">
        {information.kwnoledgesandprojects.description.map((study, index) => {
          return (
            <div className="knowandprojects-page_description-div">
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

export default KnowandprojectsPage;
