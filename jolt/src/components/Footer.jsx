import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="column">
        <h3>Jolt</h3>
        <p></p>
      </div>
      <div className="column">
        <h3>Important Links</h3>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <h3>Contact</h3>
      <div className="column">
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Footer;
