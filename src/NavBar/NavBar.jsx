import React from "react";
import "./NavBar.scss";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function NavBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "lightgray" }}>
          <Toolbar>
            <img src="stormPeakLogo.png" alt="logo" className="logo" />
            <Typography variant="h4">Storm Peak Engineering</Typography>
            <div className="navLinks">
              <Typography
                variant="h6"
                className="navLinkObject"
                style={{ marginRight: "5%" }}
              >
                {" "}
                About
              </Typography>
              <Typography
                variant="h6"
                className="navLinkObject"
                style={{ marginRight: "5%" }}
              >
                {" "}
                Projects
              </Typography>
              <Typography
                variant="h6"
                className="navLinkObject"
                style={{ marginRight: "5%" }}
              >
                {" "}
                Contact
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
