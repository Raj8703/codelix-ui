import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./ServicesSection.css";

const services = [
  {
    title: "Web Development",
    desc: "Scalable, secure, and fast websites tailored to your business goals.",
  },
  {
    title: "Application Development",
    desc: "Scalable, secure, and fast websites tailored to your business goals.",
  },
  {
    title: "UI/UX Design",
    desc: "Scalable, secure, and fast websites tailored to your business goals.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Scalable, secure, and fast websites tailored to your business goals.",
  },
  {
    title: "Custom Software Development",
    desc: "Scalable, secure, and fast websites tailored to your business goals.",
  },
  {
    title: "AI Development",
    desc: "Scalable, secure, and fast websites tailored to your business goals.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-heading">
          <h2>
            Let’s See What Services{" "}
            <span className="highlight">We’re Providing You</span>
          </h2>
          <p>
            From concept to completion, our expert team delivers solutions that
            drive real results, blending innovation, performance, and purposeful
            design.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
