import React, { useState } from "react";
import "./Footer.css";
import Logo from "../assets/Logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Email submitted:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-banner">
        <div className="footer-banner-content">
          {[...Array(12)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="footer-banner-text">WE LIVE IN IT</span>
              <span className="footer-banner-dot">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-inner">
          {/* LEFT SECTION */}
          <div className="footer-left">
            <div className="footer-left-flex">
              <div className="footer-logo">
                <img src={Logo} alt="Codelix Logo" />
              </div>

              <div className="footer-columns">
                <div className="footer-column">
                  <h3 className="footer-column-title">INFO</h3>
                  <ul className="footer-link-list">
                    {["Codelix", "Work", "Services", "Blog", "Contact"].map(
                      (item) => (
                        <li key={item}>
                          <a href="#" className="footer-link">
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-column-title">SERVICES</h3>
                  <ul className="footer-link-list">
                    {[
                      "Web Development",
                      "Mobile Development",
                      "UI/UX Design",
                      "Digital Marketing",
                      "Agentic AI",
                    ].map((item) => (
                      <li key={item}>
                        <a href="#" className="footer-link">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="footer-right">
            <h3 className="footer-column-title">JOIN NOW</h3>
            <p className="footer-newsletter-text">
              Join our newsletter to stay up to date on features and releases
            </p>

            <div className="footer-input-wrapper">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-input"
              />
              <button onClick={handleSubmit} className="footer-submit-btn">
                →
              </button>
            </div>

            <p className="footer-newsletter-text">
              Get updates on latest tech and digital trends
            </p>
          </div>
        </div>

        {/* Social Bar */}
        <div className="footer-social-grid">
          {[
            { text: "info@codelix.in", href: "mailto:info@codelix.in" },
            { text: "INSTAGRAM", href: "#" },
            { text: "UPWORK", href: "#" },
            { text: "LINKEDIN", href: "#" },
          ].map((social) => (
            <a
              key={social.text}
              href={social.href}
              className="footer-social-link"
            >
              {social.text}
              <svg
                className="footer-social-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 CodelixITsolutions — All Rights Reserved
          </div>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
