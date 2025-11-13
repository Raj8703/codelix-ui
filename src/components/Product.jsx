import React from "react";
import "./Product.css";
import productImage from "../assets/product1.png";

const Product = () => {
  return (
    <section className="product-wrapper">
      <h2 className="section-title">
        Explore Our <span>Product</span>
      </h2>

      <div className="product-card">
        <div className="product-text">
          <h3 className="product-title">AangonOne - Society Management</h3>
          <p className="product-description">
            Introducing an innovative point-of-sale (POS) system specifically
            tailored for healthcare facilities that handle over 2,000
            transactions daily. This advanced solution streamlines operations,
            enhances patient experiences.
          </p>

          <div className="tag-container">
            <span>Maintenance</span>
            <span>Pre-Approve</span>
            <span>Finance</span>
            <span>Community</span>
            <span>Marketplace</span>
            <span>Amenities</span>
            <span>Local Business</span>
          </div>

          <button className="explore-btn">Explore Product →</button>
        </div>

        <div className="product-image-box">
          {/* <div className="inner-image-text">AangonOne</div> */}
          <img src={productImage} alt="Product Logo" />
        </div>
      </div>
    </section>
  );
};

export default Product;
