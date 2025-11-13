import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-content">
        <div className="content">
          <h2>Let’s build something that works beautifully.</h2>
          <p>
            Tell us about your idea, and we’ll help you make it real, faster and
            better.
          </p>
        </div>
        <button className="cta-btn">
          Get Free Consultation <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default Cta;
