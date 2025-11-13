import React from "react";
import ProjectDetail from "../components/Projectdetail";
import CaseProjectReview from "../components/CaseProjectReview";
import Casectr from "../components/Casectr";
import ProjectImg from "../components/ProjectImg";

const CaseStudyDetail = () => {
  return (
    <div>
      <ProjectDetail />
      <CaseProjectReview />
      <Casectr />
      <ProjectImg />
    </div>
  );
};

export default CaseStudyDetail;
