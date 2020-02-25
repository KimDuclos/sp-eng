import React from "react";
import "./Title.scss";
// import Link from "@material-ui/core/Link";
// import Button from "@material-ui/core/Button";
import SocialButton from "./SocialButton.jsx";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const TitleSection = () => {
  return (
    <div className="titleBox">
      <div id="homeFooter"></div>
      <div className="title">Storm Peak Engineering</div>
      <div className="description">Description of your business goes here</div>
      <div className="socialButtons">
        <SocialButton
          socialLink="https://www.linkedin.com/in/sean-donohue-7340842a/"
          socialName="LinkedIN"
          socialIcon={<LinkedInIcon />}
        />
        <SocialButton
          socialLink="https://github.com/skrawn"
          socialName="GitHub"
          socialIcon={<GitHubIcon />}
        />
        <SocialButton
          socialLink="mailto:sdonohue331@gmail.com?subject=Hello from your portfolio page"
          socialName="Email"
          socialIcon={<EmailIcon />}
        />
      </div>
      <div id="aboutFooter"></div>
    </div>
  );
};

export default TitleSection;
