import React from "react";
import "./Services.scss";
import ServicePanel from "./ServicePanel.jsx";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="servicesTitle">Services</div>
      <ServicePanel
        serviceTitle="Web Applications"
        serviceDescription="Whether you need a full web application complete with a backend and frontend or just pieces of each, we can create responsive, reliable web applications for your project."
      />
      <ServicePanel
        serviceTitle="Embedded Systems and IoT"
        serviceDescription="We’re experts on embedded systems and IoT applications. Anything from 8-bit microcontrollers to application processors running custom Linux distributions is in our wheelhouse."
      />
      <ServicePanel
        serviceTitle="Hardware Prototyping"
        serviceDescription="Got an idea for a project that needs hardware? We can help your ideas become proof-of-concepts."
      />
      <div id="aboutServices"></div>
    </div>
  );
};

export default Services;
