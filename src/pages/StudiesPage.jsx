import React from "react";
import logo from "../assets/logo.png";
import information from "../utils/structure.json";

import NavBar from "../components/navBar/NavBar";

function StudiesPage() {
  return (
    <>
      <NavBar />
      <h2>{information.studies.title}</h2>
      <div>
        {information.studies.description.map((study, index) => {
          return (
            <div>
              <h3>{study.name}</h3>
              <p>{study.description}</p>
            </div>
          );
        })}
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default StudiesPage;
