import React from "react";
import "./ServicePanel.scss";

const ServicePanel = props => {
  return (
    <div className="grow" style={{ backgroundColor: "#EBF095" }}>
      <h2>{props.serviceTitle}</h2>
      <p>{props.serviceDescription}</p>
      <img
        src={props.serviceIcon1}
        alt="service icon"
        className="softwareIcon1"
      />
      <img
        src={props.serviceIcon2}
        alt="service icon"
        className="softwareIcon2"
      />
      <img
        src={props.serviceIcon3}
        alt="service icon"
        className="softwareIcon3"
      />
      <img
        src={props.serviceIcon4}
        alt="service icon"
        className="softwareIcon4"
      />
    </div>
  );
};

export default ServicePanel;
