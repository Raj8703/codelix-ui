import React from "react";
import "./WorkHeroSection.css";
import Bg from "../assets/work-bg.png"; // imported image

const WorkHeroSection = () => {
  return (
    <div
      className="work-hero"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="work-content">
        <h1>Work</h1>
        <p>
          We help startups and enterprises craft human-centered digital products
          that perform beautifully and deliver measurable business value.
        </p>
      </div>
    </div>
  );
};

export default WorkHeroSection;
