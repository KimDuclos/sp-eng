import React from "react";
import "./Services.scss";
import ServicePanel from ".//ServicePanel.jsx";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="servicesTitle">Services</div>
      <ServicePanel
        serviceTitle="Front End"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ante ornare odio pharetra commodo. Nam felis ipsum, ultricies ac lacinia ut, vehicula sed ante. Cras tempus cursus libero, at porttitor nunc iaculis at. Sed vitae convallis mauris. Nunc a eros ullamcorper, elementum ante vel, ultricies massa. Duis bibendum lorem a commodo molestie. Ut ornare iaculis dignissim. Pellentesque vitae aliquet velit. Integer rhoncus aliquet congue. Morbi et sapien nec nisl dignissim tempor nec eget metus. Donec mi lectus, posuere nec aliquet sit amet, imperdiet at lorem. Curabitur iaculis commodo laoreet."
      />
      <ServicePanel
        serviceTitle="IOT / APIs / Databases"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ante ornare odio pharetra commodo. Nam felis ipsum, ultricies ac lacinia ut, vehicula sed ante. Cras tempus cursus libero, at porttitor nunc iaculis at. Sed vitae convallis mauris. Nunc a eros ullamcorper, elementum ante vel, ultricies massa. Duis bibendum lorem a commodo molestie. Ut ornare iaculis dignissim. Pellentesque vitae aliquet velit. Integer rhoncus aliquet congue. Morbi et sapien nec nisl dignissim tempor nec eget metus. Donec mi lectus, posuere nec aliquet sit amet, imperdiet at lorem. Curabitur iaculis commodo laoreet."
      />
      <ServicePanel
        serviceTitle="Microcontrollers / Embedded Linux"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ante ornare odio pharetra commodo. Nam felis ipsum, ultricies ac lacinia ut, vehicula sed ante. Cras tempus cursus libero, at porttitor nunc iaculis at. Sed vitae convallis mauris. Nunc a eros ullamcorper, elementum ante vel, ultricies massa. Duis bibendum lorem a commodo molestie. Ut ornare iaculis dignissim. Pellentesque vitae aliquet velit. Integer rhoncus aliquet congue. Morbi et sapien nec nisl dignissim tempor nec eget metus. Donec mi lectus, posuere nec aliquet sit amet, imperdiet at lorem. Curabitur iaculis commodo laoreet."
      />
      <ServicePanel
        serviceTitle="Yocto Hardware / PCBs (low-speed prototyping)"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ante ornare odio pharetra commodo. Nam felis ipsum, ultricies ac lacinia ut, vehicula sed ante. Cras tempus cursus libero, at porttitor nunc iaculis at. Sed vitae convallis mauris. Nunc a eros ullamcorper, elementum ante vel, ultricies massa. Duis bibendum lorem a commodo molestie. Ut ornare iaculis dignissim. Pellentesque vitae aliquet velit. Integer rhoncus aliquet congue. Morbi et sapien nec nisl dignissim tempor nec eget metus. Donec mi lectus, posuere nec aliquet sit amet, imperdiet at lorem. Curabitur iaculis commodo laoreet."
      />
    </div>
  );
};

export default Services;
