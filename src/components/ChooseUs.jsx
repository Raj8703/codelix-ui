import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  const reasons = [
    {
      title: "Experienced Team",
      description:
        "Our team brings years of cross-industry experience in Web, App, SaaS, and UI/UX design. We blend technical expertise with creative problem-solving to deliver solutions that are both visually compelling and technically reliable.",
    },
    {
      title: "Smart Solutions",
      description:
        "We don’t just build, we think ahead. Our AI-driven and design-focused approach ensures every solution is efficient, scalable, and crafted to make your business smarter, faster, and future-ready.",
    },
    {
      title: "Transparent Communication",
      description:
        "We believe clarity builds trust. From kickoff to delivery, you’ll always know what’s happening, why it’s happening, and when it’s happening with complete visibility into project progress.",
    },
    {
      title: "Dedicated Team",
      description:
        "We treat your goals as our own. Our passionate team works hand-in-hand with you, ensuring every project milestone reflects quality, precision, and your business vision.",
    },
    {
      title: "Scalability & Security",
      description:
        "We treat your goals as our own. Our passionate team works hand-in-hand with you, ensuring every project milestone reflects quality, precision, and your business vision.",
    },
    {
      title: "On-Time Delivery",
      description:
        "We understand that timing defines success. Our disciplined process ensures every project launches exactly when promised, maintaining excellence without compromise.",
    },
  ];

  return (
    <section className="chooseus-section">
      <div className="chooseus-header">
        <h2>
          Reasons To <span>Choose Us</span>
        </h2>
        <p>
          From concept to completion, we craft digital experiences that don’t
          just look great; they drive measurable growth and long-term impact.
        </p>
      </div>

      <div className="chooseus-grid">
        {reasons.map((item, index) => (
          <div className="chooseus-card" key={index}>
            <div className="choose-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
