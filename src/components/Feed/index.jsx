import React from 'react';
import './styles.css';
import instagramImage1 from './img/insta1.png';
import instagramImage2 from './img/insta2.png';
import instagramImage3 from './img/insta3.png';
import instagramImage4 from './img/insta4.png';
import instagramImage5 from './img/insta5.png';
import instagramImage6 from './img/insta6.png';
import instagramImage7 from './img/insta7.png';
import instagramImage8 from './img/insta8.png';
import instagramImage9 from './img/insta9.png';
const Feed = () => {
  return (
    <div className="footer-section__feed">
      <div className="header">
        <h3>INSTAGRAM</h3>
      </div>
      <div className="img_row">
        <img src={instagramImage1} alt="Insta" />
        <img src={instagramImage2} alt="Insta" />
        <img src={instagramImage3} alt="Insta" />
      </div>
      <div className="img_row">
        <img src={instagramImage4} alt="Insta" />
        <img src={instagramImage5} alt="Insta" />
        <img src={instagramImage6} alt="Insta" />
      </div>
      <div className="img_row">
        <img src={instagramImage7} alt="Insta" />
        <img src={instagramImage8} alt="Insta" />
        <img src={instagramImage9} alt="Insta" />
      </div>
      <div className="options">
        <a href="#view">View More Photos..</a>
      </div>
    </div>
  );
};
export default Feed;
