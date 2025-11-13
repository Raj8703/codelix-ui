// import React from "react";
// import "./Client.css";
// import Alex from "../assets/alex.svg";
// import Linkedin from "../assets/linkedin.svg";
// import clientlogo from "../assets/clientlogo.png";
// import clientlogo2 from "../assets/clientlogo2.png";
// import clientlogo3 from "../assets/clientlogo3.png";
// import clientlogo4 from "../assets/clientlogo4.png";
// import clientlogo5 from "../assets/clientlogo5.png";

// const testimonials = [
//   {
//     text: "We were able to successfully complete the project by meeting the best partner. They have a very good understanding of development and skills, and are fully committed to the task schedule. The time we met and spent with them is lucky for us. We'll always work on the project with them.",
//     avatar: Alex,
//     Linkedin: Linkedin,
//     logos: [clientlogo, clientlogo2, clientlogo3, clientlogo4, clientlogo5],
//   },
// ];

// const Client = () => {
//   return (
//     <section className="client-section">
//       <h2 className="client-title">
//         Our Work Through <span>Client’s Words</span>
//       </h2>

//       <div className="client-content">
//         {/* Left testimonial */}
//         <div className="client-left">
//           <div className="quote-mark">“</div>
//           <p className="client-text">{testimonials[0].text}</p>
//           <div className="client-author">
//             <img src={testimonials[0].avatar} alt="avatar" />
//             <img src={testimonials[0].Linkedin} alt="Linkedin" />
//           </div>
//         </div>

//         {/* Logos right */}
//         <div className="client-logos">
//           {testimonials[0].logos.map((logo, index) => (
//             <div key={index} className="logo-box">
//               <img src={logo} alt="brand logo" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Client;

// -----------

import React, { useState } from "react";
import "./Client.css";
import Alex from "../assets/Alex.svg";
import Linkedin from "../assets/linkedin.svg";
import clientlogo from "../assets/clientlogo.png";
import clientlogo2 from "../assets/clientlogo2.png";
import clientlogo3 from "../assets/clientlogo3.png";
import clientlogo4 from "../assets/clientlogo4.png";
import clientlogo5 from "../assets/clientlogo5.png";

const testimonials = [
  {
    company: "Client One",
    text: "We were able to successfully complete the project by meeting the best partner. They have a very good understanding of development and skills, and are fully committed to the task schedule. The time we met and spent with them is lucky for us. We'll always work on the project with them.",
    avatar: Alex,
    Linkedin: Linkedin,
  },
  {
    company: "Client Two",
    text: "They delivered a high-quality solution with professionalism. Great partner for long-term collaboration.",
    avatar: Alex,
    Linkedin: Linkedin,
  },
  {
    company: "Client Three",
    text: "Superb problem-solving skills and smooth workflow. We highly recommend their team.",
    avatar: Alex,
    Linkedin: Linkedin,
  },
  {
    company: "Client Four",
    text: "Exceptional team with great knowledge. Efficient, dedicated, and easy to work with.",
    avatar: Alex,
    Linkedin: Linkedin,
  },
  {
    company: "Client Five",
    text: "Reliable, fast, and very skilled developers. They understood our goals perfectly.",
    avatar: Alex,
    Linkedin: Linkedin,
  },
];

const logos = [clientlogo, clientlogo2, clientlogo3, clientlogo4, clientlogo5];

const Client = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="client-section">
      <h2 className="client-title">
        Our Work Through <span>Client’s Words</span>
      </h2>

      <div className="client-content">
        {/* Left - Dynamic Text */}
        <div className="client-left">
          <div className="quote-mark">“</div>
          <p className="client-text">{testimonials[activeIndex].text}</p>

          <div className="client-author">
            <img src={testimonials[activeIndex].avatar} alt="avatar" />
            <img src={testimonials[activeIndex].Linkedin} alt="Linkedin" />
          </div>
        </div>

        {/* Right - Clickable Logos */}
        <div className="client-logos">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`logo-box ${
                activeIndex === index ? "active-logo" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={logo} alt={`client logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
