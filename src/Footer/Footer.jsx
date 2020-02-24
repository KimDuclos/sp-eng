import React from "react";
import "./Footer.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerNavLinks">
        <AnchorLink href="#home">
          <p>Home</p>
        </AnchorLink>
        <AnchorLink href="#about">
          <p>About</p>
        </AnchorLink>
        <AnchorLink href="#projects">
          <p>projects</p>
        </AnchorLink>
        <AnchorLink href="#services">
          <p>services</p>
        </AnchorLink>
      </div>
      <div className="#copyright">
        Copyright © 2020 Storm Peak Consulting All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
