import React from "react";
import "./NavBar.scss";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
        <AppBar style={{ backgroundColor: "#F9CA87" }} id="home">
          <Toolbar>
            <img src="stormPeakLogo.png" alt="logo" className="logo" />
            <Typography variant="h4" class="navTitle">
              Storm Peak Engineering
            </Typography>
            <div className="navLinks">
              <AnchorLink href="#about" style={{ marginRight: "10%" }}>
                <Typography variant="h6" className="navLinkObject">
                  {" "}
                  About
                </Typography>
              </AnchorLink>
              <AnchorLink href="#projects" style={{ marginRight: "10%" }}>
                <Typography variant="h6" className="navLinkObject">
                  {" "}
                  Projects
                </Typography>
              </AnchorLink>
              <AnchorLink href="#services" style={{ marginRight: "10%" }}>
                <Typography variant="h6" className="navLinkObject">
                  {" "}
                  Services
                </Typography>
              </AnchorLink>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
