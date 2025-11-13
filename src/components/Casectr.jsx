import React from "react";
import "./Casectr.css";

const Casectr = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Let’s build something that <br /> works beautifully.
        </h2>

        <div className="cta-btn-wrapper">
          <button className="cta-btn">Get Free Consultation →</button>
          <div className="cta-circle" />
        </div>
      </div>
    </section>
  );
};

export default Casectr;
