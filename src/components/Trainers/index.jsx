import React from 'react';
import trainersImage1 from './img/image-trainer-1.png';
import trainersImage2 from './img/image-trainer-2.png';
import trainersImage3 from './img/image-trainer-3.png';

import './styles.css';
const Trainers = () => {
  return (
    <section className="trainers-section section--py" id="trainers">
      <div className="container">
        <div className="trainers-section__heading">
          <h2 className="trainers-section__title">
            expert
            <span className="trainers-section__highlited-text"> trainers</span>
          </h2>
          <p className="trainers-section__intro">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            ad!
          </p>
        </div>

        <div className="trainers-section__wrapper wrapper">
          <div className="trainers-section__trainer">
            <img
              className="trainers-section__trainer-img"
              src={trainersImage1}
              alt="Trainer"
            />
            <h3 className="trainers-section__trainer-name">Sarra Miller</h3>
            <span className="trainers-section__highlited-text trainers-section__training-type">
              Spinning Trainer
            </span>
            <p className="trainers-section__describtion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ad.
            </p>
          </div>
          <div className="trainers-section__trainer">
            <img
              className="trainers-section__trainer-img"
              src={trainersImage2}
              alt="Trainer"
            />
            <h3 className="trainers-section__trainer-name">Sarra Miller</h3>
            <span className="trainers-section__highlited-text trainers-section__training-type">
              bootcamp Trainer
            </span>
            <p className="trainers-section__describtion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ad.
            </p>
          </div>
          <div className="trainers-section__trainer">
            <img
              className="trainers-section__trainer-img"
              src={trainersImage3}
              alt="Trainer"
            />
            <h3 className="trainers-section__trainer-name">Sarra Miller</h3>
            <span className="trainers-section__highlited-text trainers-section__training-type">
              Spinning Trainer
            </span>
            <p className="trainers-section__describtion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Trainers;
