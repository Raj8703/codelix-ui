import React from "react";
import "./ServiceTechnology.css";

// import your icons from assets folder
import ServiceLogo1 from "../assets/ServiceLogo1.png";
import ServiceLogo2 from "../assets/ServiceLogo2.png";
import ServiceLogo3 from "../assets/ServiceLogo3.png";
import ServiceLogo4 from "../assets/ServiceLogo4.png";
import ServiceLogo5 from "../assets/ServiceLogo5.png";
import ServiceLogo6 from "../assets/ServiceLogo6.png";
import ServiceLogo7 from "../assets/ServiceLogo7.png";
import ServiceLogo8 from "../assets/ServiceLogo8.png";
import ServiceLogo9 from "../assets/ServiceLogo9.png";
import ServiceLogo10 from "../assets/ServiceLogo10.png";

const techData = [
  { icon: ServiceLogo1, name: "React Js" },
  { icon: ServiceLogo2, name: "React Js" },
  { icon: ServiceLogo3, name: "React Js" },
  { icon: ServiceLogo4, name: "React Js" },
  { icon: ServiceLogo5, name: "React Js" },
  { icon: ServiceLogo6, name: "React Js" },
  { icon: ServiceLogo7, name: "React Js" },
  { icon: ServiceLogo8, name: "React Js" },
  { icon: ServiceLogo9, name: "React Js" },
  { icon: ServiceLogo10, name: "React Js" },
];

const ServiceTechnology = () => {
  return (
    <div className="tech-section">
      <h2 className="tech-title">
        Technologies <span>We Use</span>
      </h2>
      <div className="tech-line"></div>

      <div className="tech-grid">
        {techData.slice(0, 10).map((item, index) => (
          <div className="tech-card" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTechnology;
