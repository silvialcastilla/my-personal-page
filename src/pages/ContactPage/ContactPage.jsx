import React from "react";
import information from "../../utils/structure.json";
import github from "../../assets/GitHub_Logo.png";
import linkedin from "../../assets/linkedin-logo.png";
import Fade from "react-reveal/Fade";

import NavBar from "../../components/navBar/NavBar";
import "./ContactPage.scss";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page_title">
        <Fade left>
          <h2 className="contact-page_title-h2">{information.contact.title}</h2>
        </Fade>
        <NavBar />
      </div>
      <div className="contact-page_description">
        <p>{information.contact.description}</p>
        <Fade left>
          <p className="contact-page_description-email">
            silvia.lopez.castilla@gmail.com
          </p>
        </Fade>
        <div>
          <Fade left>
            <a href="https://github.com/silvialcastilla">
              <img
                src={github}
                className="contact-page_description-image"
                alt="my github"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/silvia-lopez-castilla/">
              <img
                src={linkedin}
                className="contact-page_description-image"
                alt="my linkedin"
              ></img>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contact;
