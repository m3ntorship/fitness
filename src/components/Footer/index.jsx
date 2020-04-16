import React from 'react';
import './styles.css';
import Subscription from '../Subscription';
import Blogs from '../Blogs';
import Feed from '../Feed';
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__wrapper wrapper container">
        <Subscription />
        <Blogs />
        <Feed />
      </div>

      <div className="footer-section__credits">
        <p>© 2018 free-PSD-template</p>
      </div>
    </footer>
  );
};
export default Footer;
