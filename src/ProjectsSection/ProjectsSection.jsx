import React from "react";
import "./ProjectsSection.scss";

const ProjectSection = () => {
  return (
    <>
      <div className="projectContent">
        <div className="leftProjectContent">
          <div className="projectTitle">This is muh Project</div>
          <div className="projectDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mollis est a nunc vehicula, et vehicula diam pulvinar. Suspendisse
            viverra felis at cursus finibus. Aliquam ullamcorper, sapien vitae
            vulputate condimentum, erat tortor dapibus elit, eget tempus felis
            diam a massa. Integer blandit commodo erat eget gravida. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </div>
        </div>
        <div className="rightProjectContent">
          <img src="projectImage.jpg" alt="project img" />
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
