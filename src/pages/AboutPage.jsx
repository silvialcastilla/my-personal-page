import React from "react";
import logo from "../assets/logo.png";
import information from "../utils/structure.json";

import NavBar from "../components/navBar/NavBar";

function AboutPage() {
  return (
    <>
      <NavBar />
      <h2>{information.about.title}</h2>
      <p>{information.about.description}</p>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default AboutPage;
