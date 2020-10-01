import React from "react";
import logo from "../assets/logo.png";
import information from "../utils/structure.json";

import NavBar from "../components/navBar/NavBar";

function Contact() {
  return (
    <>
      <NavBar />
      <h2>{information.contact.title}</h2>
      <p>{information.contact.description}</p>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default Contact;
