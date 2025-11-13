import React from "react";
import "./CaseStudyCard.css";
import Build1 from "../assets/build1.png";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Meditech - Streamlining Your Healthcare Billing Process",
    desc: "Meditech is a medical billing solution that helps streamline billing, enhance claim accuracy, and improve revenue cycle performance.",
    tags: ["Healthcare", "AI", "Web"],
    image: Build1,
  },
  {
    title: "Meditech - Streamlining Your Healthcare Billing Process",
    desc: "Meditech is a medical billing solution that helps streamline billing, enhance claim accuracy, and improve revenue cycle performance.",
    tags: ["Healthcare", "AI", "Web"],
    image: Build1,
  },
  {
    title: "Meditech - Streamlining Your Healthcare Billing Process",
    desc: "Meditech is a medical billing solution that helps streamline billing, enhance claim accuracy, and improve revenue cycle performance.",
    tags: ["Healthcare", "AI", "Mobile"],
    image: Build1,
  },
];

export default function CaseStudyCards() {
  return (
    <div className="case-wrapper">
      {data.map((item, i) => (
        <div className={`case-card ${i % 2 !== 0 ? "reverse" : ""}`} key={i}>
          <div className="case-left">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link to="/case-study">
              <button className="case-btn">
                <span className="case-btn-f">Read Case Study →</span>
              </button>
            </Link>
          </div>

          <div className="case-right">
            <img src={item.image} alt="Case Study" />
          </div>
        </div>
      ))}
    </div>
  );
}
