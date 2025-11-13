import React from "react";
import "./BlogSection.css";
import Blog from "../assets/blog.png";

const blogs = [
  {
    id: 1,
    image: Blog, // replace with your image path
    title: "Top 15 React Carousel Libraries for Web Dev",
    description: "Best 15 React Carousel Libraries for 2025 Projects",
    date: "20 October 2024",
  },
  {
    id: 2,
    image: Blog,
    title: "Top 15 React Carousel Libraries for Web Dev",
    description: "Best 15 React Carousel Libraries for 2025 Projects",
    date: "20 October 2024",
  },
  {
    id: 3,
    image: Blog,
    title: "Top 15 React Carousel Libraries for Web Dev",
    description: "Best 15 React Carousel Libraries for 2025 Projects",
    date: "20 October 2024",
  },
];

const BlogsSection = () => {
  return (
    <div className="blogs-container">
      <div className="heading">
        <h2 className="blogs-heading">
          Read Our Insightful & Trending <span>Blogs</span>
        </h2>
      </div>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-overlay">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
              </div>
              <div className="blog-footer">
                <span className="blog-date">{blog.date}</span>
                <button className="read-btn-blog">
                  Read Blog <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
