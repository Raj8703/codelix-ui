import React, { useState } from "react";
import "./Navbar.css";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png"; // default logo
import LogoDark from "../assets/LogoDark.png"; // different logo for case study page

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // ✅ check if current route starts with /case-study
  const isCaseStudyPage = location.pathname.startsWith("/case-study");

  return (
    <nav className={`navbar ${isCaseStudyPage ? "navbar-dark" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={isCaseStudyPage ? LogoDark : Logo}
            alt="Codelix Logo"
            className="logo-img"
          />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/service">
          <li>Services</li>
        </Link>
        <Link to="/work">
          <li>Work</li>
        </Link>
      </ul>

      {/* Contact Button */}
      <button className="contact-btn desktop-btn">
        <span className="contact-text">Contact Us</span>
        <ArrowRight size={18} />
      </button>
    </nav>
  );
};

export default Navbar;
