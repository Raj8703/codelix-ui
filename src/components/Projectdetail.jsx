import React from "react";
import "./Projectdetail.css";
import ProjectImg from "../assets/ProjectImage.png"; // replace with your image

const ProjectDetail = () => {
  return (
    <div className="project-detail-card">
      {/* Left Text Section */}
      <div className="project-detail-content">
        <h2 className="project-detail-title">
          Meditech - Streamlining Your Healthcare Billing Process
        </h2>
        <p className="project-detail-desc">
          Introducing an innovative point-of-sale (POS) system specifically
          tailored for healthcare facilities that handle over 2,000 transactions
          daily. This advanced solution streamlines operations and enhances
          patient experiences.
        </p>

        <div className="project-detail-tags">
          <span className="project-tag">Mobile</span>
          <span className="project-tag">Web</span>
        </div>

        <button className="project-detail-btn">Schedule A Call →</button>
      </div>

      {/* Right Image Section */}
      <div className="project-detail-image">
        <img src={ProjectImg} alt="Meditech Project" />
      </div>
    </div>
  );
};

export default ProjectDetail;
