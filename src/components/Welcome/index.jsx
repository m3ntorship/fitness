import React, { useEffect, useState } from 'react';
import axios from 'axios';
import welcomeImage from './img/image2.png';
import './styles.css';

const Welcome = () => {
  const [welcome, setWelcome] = useState({});
  const [welcomeFetched, setWelcomeFetched] = useState(false);
  const [welcomeError, setWelcomeError] = useState(false);

  useEffect(() => {
    axios('http://localhost:1337/welcome')
      .then(({ data }) => {
        setWelcomeFetched(true);
        setWelcomeError(false);
        setWelcome(data);
      })
      .catch(error => {
        setWelcomeFetched(false);
        setWelcomeError('could not fetch welcome message');
      });
  }, []);
  return (
    <section className="welcom-section" id="about">
      <div className="welcom-section__wrapper">
        {welcomeFetched && (
          <div className="container">
            <div className="welcom-section__text">
              <div className="text-cont">
                <h2 className="text-content__title">{welcome.header}</h2>
                <div className="text-content__details">
                  <p>{welcome.subheader}</p>
                  <p>{welcome.description}</p>
                  <button className="btn btn-primary">get in touch</button>
                </div>
              </div>
            </div>
            <div className="welcom-section__img">
              <img src={welcomeImage} alt="Welcom" />
            </div>
          </div>
        )}
        {welcomeError && <div className="container">{welcomeError}</div>}
      </div>
    </section>
  );
};
export default Welcome;
