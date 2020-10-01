import React from "react";
import logo from "../assets/logo.png";
import information from "../utils/structure.json";

import NavBar from "../components/navBar/NavBar";

function Experience() {
  return (
    <>
      <NavBar />
      <h2>{information.experience.title}</h2>
      <div>
        {information.experience.description.map((experience, index) => {
          return (
            <div>
              <h3>{experience.name}</h3>
              <p>{experience.description}</p>
            </div>
          );
        })}
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default Experience;
