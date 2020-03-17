import React from "react";
import "./Services.scss";
import ServicePanel from "./ServicePanel.jsx";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="servicesTitle">Services</div>
      <ServicePanel
        serviceTitle="Web Applications"
        serviceDescription="Whether you need a full web application complete with a backend and frontend or just pieces of each, 
        we can create responsive, reliable web applications for your project."
        serviceIcon1="/images/NETCoreLogo.svg"
        serviceIcon2="/images/reactIcon.svg"
        serviceIcon3="/images/angularLogo.svg"
        serviceIcon4="/images/databaseLogo.svg"
      />
      <ServicePanel
        serviceTitle="Embedded Systems and IoT"
        serviceDescription="We’re experts on embedded systems and IoT applications. 
        Anything from 8-bit microcontrollers to application processors running custom Linux 
        distributions is in our wheelhouse."
        serviceIcon1="/images/microchip.svg"
        serviceIcon2="/images/yoctoLogo.png"
        serviceIcon3="/images/buildrootLogo.png"
        serviceIcon4="/images/IOTlogo.png"
      />
      <ServicePanel
        serviceTitle="Hardware Prototyping"
        serviceDescription="Got an idea for a project that needs hardware? 
        We can help your ideas become proof-of-concepts."
        serviceIcon1="/images/pcpSchematic.svg"
      />
      <div id="aboutServices"></div>
    </div>
  );
};

export default Services;
