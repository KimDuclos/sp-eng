import React from "react";
import "./Title.scss";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const TitleSection = () => {
  return (
    <>
      <div className="title">Storm Peak Engineering</div>
      <div className="description">Description of your business goes here</div>
      <div className="socialButtons">
        <Link
          href="https://www.linkedin.com/in/sean-donohue-7340842a/"
          target="blank"
        >
          <Button variant="contained">
            <p>LinkedIn</p> <LinkedInIcon />
          </Button>
        </Link>
        <Link href="https://github.com/skrawn" target="blank">
          <Button variant="contained">
            <p>GitHub</p> <GitHubIcon />
          </Button>
        </Link>
        <Link
          href="mailto:sdonohue331@gmail.com?subject=Hello from your portfolio page"
          target="blank"
        >
          <Button variant="contained">
            <p>Email</p> <EmailIcon />{" "}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default TitleSection;
