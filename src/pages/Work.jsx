import React from "react";
import WorkHeroSection from "../components/WorkHeroSection";
import CaseStudyCards from "../components/CaseStudyCard";
import Cta from "../components/Cta";
import Client from "../components/Client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Work() {
  return (
    <div>
      <WorkHeroSection />
      <CaseStudyCards />
      <Cta />
      <Client />
    </div>
  );
}
