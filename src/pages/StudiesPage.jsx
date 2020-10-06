import React from "react";
import information from "../utils/structure.json";

import NavBar from "../components/navBar/NavBar";

function StudiesPage() {
  return (
    <div className="studies-page">
      <div className="studies-page_title">
        <h2 className="studies-page_title-h2">{information.studies.title}</h2>
        <NavBar />
      </div>
      <div className="studies-page_description">
        {information.studies.description.map((study, index) => {
          return (
            <div>
              <h3>{study.name}</h3>
              <p>{study.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudiesPage;
