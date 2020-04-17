import React from 'react';
import './styles.css';
const Subscription = () => {
  return (
    <div className="footer-section__subscrition">
      <h2 className="footer-title">
        Fitne<span className="half-title">ss</span>
      </h2>
      <p className="footer-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="footer-section__social-links">
        <span className="social-links-title">Follow Us: </span>
        <ul className="social-links-list">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fas fa-globe"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fab fa-tumblr"></i>
            </a>
          </li>
        </ul>
      </div>
      <form className="footer-section__subscribe">
        <input type="email" name="subscribe" placeholder="Your Email..." />
        <button className="btn btn-primary" type="submit">
          subscribe
        </button>
      </form>
    </div>
  );
};
export default Subscription;
