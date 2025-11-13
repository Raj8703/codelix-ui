import React from "react";
import "./ServiceHero.css";
import Developer from "../assets/Developer.png"; // replace with your illustration image

const ServiceHero = () => {
  return (
    <div className="webdev-section">
      <div className="webdev-parent">
        <div className="webdev-content">
          <h2>Web Development</h2>
          <p>
            Our web development service focuses on building and maintaining
            high-quality websites. We specialize in web design, coding, and
            server management to ensure optimal performance. A well-crafted site
            boosts user engagement and satisfaction.
          </p>
          <button className="webdev-btn">
            Schedule A Call <span>→</span>
          </button>
        </div>

        <div className="webdev-image">
          <img src={Developer} alt="Web Development" />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
