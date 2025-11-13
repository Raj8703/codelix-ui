import React from "react";
import "./BuildSection.css";
import build1 from "../assets/build1.png";
import build2 from "../assets/build2.png";
import build3 from "../assets/build3.png";
import build4 from "../assets/build4.png";

const BuildSection = () => {
  return (
    <section className="build-section">
      <div className="build-container">
        <div className="building">
          <h2 className="build-title">
            This Is What <span className="highlight">We Build</span>
          </h2>
          <p className="build-subtitle">
            We build AI-driven Tech experiences that combine elegant design,
            seamless performance, and measurable results.
          </p>
        </div>

        <div className="build-grid">
          {/* Card 1 */}
          <div className="build-card">
            <img src={build1} alt="SmartPOS" className="build-image" />
            <div className="build-text">
              <div className="text-left">
                <h3>SmartPOS - Retail Billing Simplified</h3>
                <p>
                  A robust POS system for a retail chain managing 2,000+ daily
                  transactions with zero downtime.
                </p>
              </div>
              <button className="read-btn">
                Read <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="build-card">
            <img src={build2} alt="Meditech" className="build-image" />
            <div className="build-text">
              <div className="text-left-med">
                <h3>Meditech - Streamlining Your Healthcare Billing</h3>
                <p>
                  A cutting-edge POS system designed for healthcare facilities
                  managing more than 2,000 transactions every day.
                </p>
              </div>
              <button className="read-btn">
                Read <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="build-card">
            <img src={build3} alt="Meditech" className="build-image" />
            <div className="build-text">
              <div className="text-left-med">
                <h3>Meditech - Streamlining Your Healthcare Billing</h3>
                <p>
                  A cutting-edge POS system designed for healthcare facilities
                  managing more than 2,000 transactions every day.
                </p>
              </div>
              <button className="read-btn">
                Read <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="build-card">
            <img src={build4} alt="SmartPOS" className="build-image" />
            <div className="build-text">
              <div className="text-left">
                <h3>SmartPOS - Retail Billing Simplified</h3>
                <p>
                  A robust POS system for a retail chain managing 2,000+ daily
                  transactions with zero downtime.
                </p>
              </div>
              <button className="read-btn">
                Read <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        <button className="view-all-btn">
          View All <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default BuildSection;
