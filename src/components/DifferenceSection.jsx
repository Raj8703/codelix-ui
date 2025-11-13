import React from "react";
import "./DifferenceSection.css";

const DifferenceSection = () => {
  const stats = [
    { num: "50+", label: "Projects Completed" },
    { num: "95%", label: "Success Rate" },
    { num: "6+", label: "Years of Experience" },
    { num: "10+", label: "Countries Served" },
  ];

  return (
    <section className="difference">
      <div className="difference-container">
        {/* ===== Heading ===== */}
        <h2 className="difference-title">
          What Makes <span className="highlight">Us Different</span>
        </h2>

        {/* ===== Content Section ===== */}
        <div className="difference-content">
          {/* ==== Left Text ==== */}
          <div className="difference-left">
            <h3 className="left-heading">Our Young, Passionate Tech Team</h3>

            <p className="left-subtext">
              — driven to build Tech solutions that make businesses faster,
              smarter, and more connected.
            </p>

            <p className="left-description">
              From custom software systems and mobile applications to sleek
              e-commerce stores, every project at{" "}
              <span className="brand">Codelix</span> reflects our core motto:
            </p>

            <h4 className="left-quote">
              <span className="line">—————</span> “Deliver Before The Deadline.”
            </h4>
          </div>

          {/* ==== Right Stats ==== */}
          <div className="difference-right">
            {stats.map((item, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{item.num}</h3>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
