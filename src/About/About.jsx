import React from "react";
import "./About.scss";

const AboutSection = () => {
  return (
    <>
      <div className="aboutTitle" id="about">
        About Storm Peak Engineering
      </div>
      <div className="aboutContent">
        Storm Peak Engineering was founded in 2019 in Boulder, Colorado. SPE is
        a true full-stack consulting company with the capability to handle
        projects starting at the hardware on up to a responsive web application.
        We are ready to fit into your existing product or build something
        completely new. Contact us to find out what we can build for you!{" "}
      </div>

      <div id="projectsFooter"></div>
    </>
  );
};

export default AboutSection;
