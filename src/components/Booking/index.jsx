import React from 'react';
import bookingImage from './img/image1.jpg';
import './styles.css';
const Booking = () => {
  return (
    <section className="booking-section">
      <div className="container booking-section__wrapper">
        <div className="booking-section__img">
          <img src={bookingImage} alt="Booking" />
        </div>
        <form className="booking-section__form">
          <div className="booking-section__form__flex container">
            <div className="booking-section__text">
              <h3 className="booking-section__text__offer">free 7 days</h3>
              <h2 className="booking-section__text__title">online booking</h2>
            </div>
            <div className="booking-section__inputs">
              <div className="booking-section__inputs__wrapper">
                <div className="booking-section__inputs__border">
                  <select
                    name="booking__number"
                    className="booking-section__number"
                  >
                    <option value="1" defaultValue>
                      One Person
                    </option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                  <i className="fas fa-angle-down booking-section__select-icon"></i>
                </div>
                <div className="booking-section__inputs__border">
                  <input
                    type="text"
                    className="booking-date"
                    placeholder="Date"
                    required
                  />
                  <div className="booking-section__icon-bg">
                    <i className="far fa-calendar-check booking-section__icon"></i>
                  </div>
                </div>
                <div className="booking-section__inputs__border">
                  <input
                    type="text"
                    className="booking-time"
                    placeholder="Time"
                    required
                  />
                  <div className="booking-section__icon-bg">
                    <i className="far fa-clock"></i>
                  </div>
                </div>
              </div>
              <div className="booking-section__inputs__wrapper">
                <div className="booking-section__inputs__border">
                  <input
                    type="text"
                    className="booking-section__booking-name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="booking-section__inputs__border">
                  <input
                    type="text"
                    className="booking-section__booking-phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="booking-section__inputs__border">
                  <input
                    type="text"
                    className="booking-section__booking-email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <button className="booking-section__button" type="submit">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Booking;
