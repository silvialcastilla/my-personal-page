import React from "react";
import logo from "../../assets/logo.png";

import "./Logo.scss";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo_personal-page" />
    </div>
  );
}

export default Logo;
