import React, { useState } from "react";
import "./Faqs.css";

const faqData = [
  {
    question: "Do you provide source code after project completion?",
    answer:
      "Yes. Once the project is completed and fully paid for, you receive 100% ownership of the source code, along with documentation and deployment details.",
  },
  {
    question: "What if I need changes after the project is delivered?",
    answer:
      " We offer a revision window after delivery for design or functionality tweaks. For ongoing improvements, we recommend our maintenance plan, which covers updates, enhancements, and tech support.",
  },
  {
    question: "How do you integrate AI into your solutions?",
    answer:
      "We use AI to enhance performance and user experience through smart recommendations, chat automation, predictive analytics, and process optimisation. Our AI-powered integrations are tailored to your business goals, ensuring tangible results, not just buzzwords.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, contact support to add business or billing information.",
  },
  {
    question: "How does billing work?",
    answer:
      " Our billing process is simple and transparent. After finalising your project scope, we provide a detailed quotation with milestones. Payments are made in phases: an upfront deposit, followed by milestone-based instalments as work progresses.",
  },
  {
    question: "Can you sign an NDA before starting the project?",
    answer:
      "Of course. We take confidentiality seriously and are happy to sign an NDA (Non-Disclosure Agreement) before discussing or starting your project to protect your ideas and data.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <p className="faq-subtitle">
          We’ve gathered the most common questions to help you understand how we
          build, design, and deliver with excellence.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
