import React from "react";
import "./TitleSection.scss";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

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
          <Button variant="contained">LinkedIn</Button>
        </Link>
        <Link href="https://github.com/skrawn" target="blank">
          <Button variant="contained">GitHub</Button>
        </Link>
        <Link to="mailto:sdonohue331@gmail.com?subject=Portfolio Contact" target="blank">
          <Button variant="contained">Email</Button>
        </Link>
      </div>
    </>
  );
};

export default TitleSection;
