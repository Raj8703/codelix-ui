import React from "react";
import "./CaseProjectReview.css";

// 👇 import your images
import Build1 from "../assets/build1.png";

export default function CaseProjectReview() {
  return (
    <div className="cs-wrapper">
      {/* Title */}
      <h2 className="cs-title">
        Project <span>Overview</span>
      </h2>

      {/* Description */}
      <p className="cs-desc">
        Introducing an innovative point-of-sale (POS) system specifically
        tailored for healthcare facilities that handle over 2,000 transactions
        daily. This solution not only enhances patient care but also
        significantly increases patient processing and reduces revenue leakage.
        With an intuitive interface and robust security measures, this POS
        system is designed to elevate healthcare efficiency.
      </p>

      {/* Laptop Image */}
      <div className="cs-image-large">
        <img src={Build1} alt="Laptop Preview" />
      </div>

      {/* Challenges Section */}
      <div className="cs-row">
        <div className="cs-text-box">
          <h3>Challenges</h3>
          <p>
            Developing a meditech app comes with its own set of challenges,
            including designing user-friendly interfaces, maintaining data
            security, integrating with healthcare systems, and ensuring smooth
            navigation. Additionally, keeping up with rapid technological
            advancements and addressing user feedback effectively can be
            demanding. The critical balance requires careful planning to create
            a successful and impactful application.
          </p>
        </div>

        <div className="cs-image-small">
          <img src={Build1} alt="App UI" />
        </div>
      </div>

      {/* Solutions Section */}
      <div className="cs-row">
        <div className="cs-image-small">
          <img src={Build1} alt="Solutions UI" />
        </div>

        <div className="cs-text-box">
          <h3>Solutions</h3>
          <p>
            We designed a meditech application with modern UI, secure
            architecture, fast performance, and seamless third-party
            integration. The application was optimized based on hospital
            workflow research and real user feedback, ensuring both ease of use
            and advanced medical functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
