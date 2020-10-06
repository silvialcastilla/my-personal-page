import React from "react";
import information from "../utils/structure.json";

import NavBar from "../components/navBar/NavBar";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page_title">
        <h2 className="contact-page_title-h2">{information.contact.title}</h2>
        <NavBar />
      </div>
      <div className="contact-page_description">
        <p>{information.contact.description}</p>
      </div>
    </div>
  );
}

export default Contact;
