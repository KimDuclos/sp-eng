import React from "react";
import "./ServicePanel.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const ServicePanel = props => {
  return (
    <div className="grow" style={{ backgroundColor: "#EBF095", margin: "2% auto 2% auto" }}>
      <div className="titleAndIcons">
        <div className="serviceTitle">
          <h2>{props.serviceTitle}</h2>
        </div>
        <div className="serviceIcons">
          <img
            src={props.serviceIcon1}
            alt="service icon"
            className="softwareIcon1"
            style={{ width: props.serviceIcon1Width }}
          />
          {props.serviceIcon2 && (
            <img
              src={props.serviceIcon2}
              alt="service icon"
              className="softwareIcon2"
              style={{ height: props.serviceIcon2Height, margin: props.serviceIcon2margin }}
            />
          )}
          {props.serviceIcon3 && (
            <img
              src={props.serviceIcon3}
              alt="service icon"
              className="softwareIcon3"
              style={{ height: props.serviceIcon3Height, margin: props.serviceIcon3margin }}
            />
          )}
          {props.serviceIcon3 && (
            <img
              src={props.serviceIcon4}
              alt="service icon"
              className="softwareIcon4"
            />
          )}
        </div>
      </div>
      <KeyboardArrowDownIcon />
      <div className="serviceDescription">
        <p>{props.serviceDescription}</p>
      </div>
    </div>
  );
};

export default ServicePanel;
