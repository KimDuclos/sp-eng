import React from "react";
import "./SocialButton.scss";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const SocialButton = props => {
  return (
    <Link href={props.socialLink} target="blank">
      <Button
        variant="contained"
        style={{ backgroundColor: "#F9CA87", width: "125px" }}
      >
        <p style={{paddingRight: "10%"}}>{props.socialName}</p> {props.socialIcon}
      </Button>
    </Link>
  );
};

export default SocialButton;