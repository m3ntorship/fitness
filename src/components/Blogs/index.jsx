import React from 'react';
import blogImage1 from './img/blogs1.jpg';
import blogImage2 from './img/blogs2.jpg';
import blogImage3 from './img/blogs3.jpg';

import './styles.css';
const Blogs = () => {
  return (
    <div className="footer-section__blogs" id="blog">
      <h3>BLOGS</h3>
      <a
        href="https://www.m3ntorship.com"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        <div className="blog-container">
          <div className="blog-img-container">
            <img src={blogImage1} alt="bolg post" />
          </div>
          <div className="blog-title-wrapper">
            <p className="blog-title">
              This is a blog post about fitness and, This is a blog post about
              fitness and.
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://www.m3ntorship.com"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        <div className="blog-container">
          <div className="blog-img-container">
            <img src={blogImage2} alt="bolg post" />
          </div>
          <div className="blog-title-wrapper">
            <p className="blog-title">
              This is a blog post about fitness and, This is a blog post about
              fitness and.
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://www.m3ntorship.com"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        <div className="blog-container">
          <div className="blog-img-container">
            <img src={blogImage3} alt="bolg post" />
          </div>
          <div className="blog-title-wrapper">
            <p className="blog-title">
              This is a blog post about fitness and, This is a blog post about
              fitness and.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Blogs;
