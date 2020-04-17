import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const BACKEND_URL = `http://localhost:1337`;
const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [programsFetched, setProgramsFetched] = useState(false);
  const [programsError, setProgramsError] = useState(false);

  useEffect(() => {
    axios(`${BACKEND_URL}/programs`)
      .then(({ data }) => {
        setProgramsFetched(true);
        setProgramsError(false);
        setPrograms(data);
      })
      .catch(error => {
        setProgramsFetched(false);
        setProgramsError('could not fetch programs');
      });
  }, []);
  return (
    <section className="training-programs section--py" id="programs">
      <div className="container">
        <div className="training-programs__heading">
          <h2>
            welcome to <span>fitness</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            facilis!
          </p>
        </div>
        <div className="training-programs__wrapper wrapper">
          <div className="training-programs__wrapper">
            {programsFetched &&
              programs.map(({ title, description, image: { url } }) => {
                console.log(url);
                const imgSrc = ~url.indexOf('uploads')
                  ? `${BACKEND_URL}${url}`
                  : url;
                return (
                  <div
                    className="trainging-programs__program"
                    key={url + title}
                  >
                    <img src={imgSrc} alt="Training Porgram" />
                    <div className="training-programs__program-content">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <button className="btn btn-primary btn--getInTouch">
                        Get in Touch
                      </button>
                    </div>
                  </div>
                );
              })}
            {programsError && <div>{programsError}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Programs;
