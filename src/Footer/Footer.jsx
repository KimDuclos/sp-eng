import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footerNavLinks">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a hreft="#">Contact</a>
      </div>
      <div className="copyright">
        Copyright © 2017 Storm Peak Consulting All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
