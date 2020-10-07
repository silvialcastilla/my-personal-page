import React from "react";
import Fade from "react-reveal/Fade";
import information from "../../utils/structure.json";

import NavBar from "../../components/navBar/NavBar";
import "./KnowledgesPage.scss";

function KnowledgesPage() {
  return (
    <div className="knowledges-page">
      <div className="knowledges-page_title">
        <Fade left>
          <h2 className="knowledges-page_title-h2">
            {information.knowledges.title}
          </h2>
        </Fade>
        <NavBar />
      </div>
      <div className="knowledges-page_description">
        <p>{information.knowledges.description}</p>
      </div>
    </div>
  );
}

export default KnowledgesPage;
