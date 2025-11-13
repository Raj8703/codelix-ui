import React from "react";
import "./ServiceWork.css";
import { ArrowUpRight } from "lucide-react"; // install lucide-react or replace with ➚ symbol

const steps = [
  {
    number: "01",
    title: "Project Ideation",
    desc: "We start by listening to your business goals, challenges, and vision for your web application. We learn about your target audience, competitors, and key features you require to create an optimal solution.",
  },
  {
    number: "02",
    title: "Planning",
    desc: "Based on our initial discussion, we create a detailed project plan that includes timelines, milestones, and deliverables. We collaborate with you to finalize the scope and ensure we're aligned on the project's objectives.",
  },
  {
    number: "03",
    title: "Design",
    desc: "Once we have a clear understanding of your requirements, we move on to create high-fidelity designs. We work collaboratively with you to ensure that the design aligns with your brand and user experience goals.",
  },
  {
    number: "04",
    title: "Agile Development",
    desc: "We follow an agile development approach, which means we work in sprints to deliver functional pieces of the project, test them, and make adjustments as needed. This allows us to be flexible to changing requirements.",
  },
  {
    number: "05",
    title: "Testing",
    desc: "Before we deploy your web application, we thoroughly test it for functionality, usability, security, and performance. We make sure that everything is working as expected through user acceptance testing.",
  },
  {
    number: "06",
    title: "Deployment",
    desc: "Once the solution has been tested and approved, we deploy it to the production environment. We provide post-launch support to ensure smooth operation and offer training to your team if needed.",
  },
];

const ServiceWork = () => {
  return (
    <div className="howwework-section">
      <h2 className="howwework-title">
        How We <span>Work</span>
      </h2>
      <div className="howwework-line"></div>

      <div className="howwework-grid">
        {steps.map((step, index) => (
          <div className="howwework-card" key={index}>
            <div className="howwework-header">
              <span className="step-number">{step.number}</span>
              <ArrowUpRight className="arrow-icon" size={18} />
            </div>
            <h3 className="title">{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceWork;
