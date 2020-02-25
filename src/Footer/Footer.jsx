import React from "react";
import "./Footer.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerNavLinks">
        <AnchorLink href="#homeFooter">
          <p>Home</p>
        </AnchorLink>
        <AnchorLink href="#aboutFooter">
          <p>About</p>
        </AnchorLink>
        <AnchorLink href="#projectsFooter">
          <p>Projects</p>
        </AnchorLink>
        <AnchorLink href="#servicesFooter">
          <p>Services</p>
        </AnchorLink>
      </div>
      <div className="#copyright">
        Copyright © 2020 Storm Peak Consulting All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
