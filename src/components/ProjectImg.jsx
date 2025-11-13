import React from "react";
import "./ProjectImg.css";
import ProjectImage from "../assets/ProjectImage.png";

const ProjectImg = () => {
  return (
    <div className="caseImages-wrapper">
      <img src={ProjectImage} alt="Case Study 1" />
      <img src={ProjectImage} alt="Case Study 2" />
    </div>
  );
};

export default ProjectImg;
