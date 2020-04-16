import React from 'react';
import './styles.css';
const PromotionAndContact = () => {
  return (
    <div className="promotion-contact-flexwrapper">
      <section className="promotions-section">
        <h2 className="promotion-header">try for free</h2>
        <p className="promotion-p">free 5 days pass</p>
        <button className="btn btn-primary">get in touch</button>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="contact-header">call us and try</h2>
        <p className="contact-number">957 547 4545</p>
        <button className="btn btn-primary">get in touch</button>
      </section>
    </div>
  );
};
export default PromotionAndContact;
