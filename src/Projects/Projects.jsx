import React from "react";
import "./Projects.scss";

const ProjectSection = () => {
  return (
    <div id="projects">
      <div className="projectContent">
        <div className="leftProjectContent">
          <div className="projectTitle">This is muh Project</div>
          <div className="projectDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mollis est a nunc vehicula, et vehicula diam pulvinar. Suspendisse
            viverra felis at cursus finibus.
          </div>
        </div>
        <div className="rightProjectContent">
          <img src="projectImage.jpg" alt="project img" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
