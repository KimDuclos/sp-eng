import React from "react";
import "./ServicePanel.scss";

const ServicePanel = (props) => {
  return (
    <div class="grow" style={{ backgroundColor: "lightGray" }}>
      <h2>{props.serviceTitle}</h2>
      <p>
        {props.serviceDescription}
      </p>
    </div>
  );
};

export default ServicePanel;
