import React from "react";
import Developer from "../assets/Developer.png";
import Bg from "../assets/Bg.png";
import "./HeroSection.css";
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";

export default function HeroSection() {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <h1>AI-Powered Tech for Ambitious Businesses</h1>
              <p>
                We craft Web, App & SaaS solutions that empower businesses, from
                startups to enterprises - with performance, precision, and
                design excellence.
              </p>
            </div>
            <div className="hero-buttons">
              <button className="primary-btn">Get a Free Quote →</button>
              <button className="secondary-btn">Explore Our Work →</button>
            </div>
          </div>
          {/* Blinking Developer Image */}
          <div className="hero-right">
            <img src={Developer} alt="Developer at Work" />
          </div>
        </div>

        <div className="trusted-section">
          <p>Trusted by 150+ Companies and growing</p>

          <div className="trusted-logos">
            <img src={Logo1} alt="Lithuanian Airports" />
            <img src={Logo2} alt="Vilniaus vandenys" />
            <img src={Logo3} alt="ŠIAULIŲ BANKAS" />
            <img src={Logo4} alt="PERSY BOOTIS" />
            <img src={Logo5} alt="101 COFFEE SHOP" />
            <img src={Logo6} alt="Royalty Range" />
          </div>
        </div>
      </div>
    </div>
  );
}
