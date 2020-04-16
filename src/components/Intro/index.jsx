import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const byOrder = ({ order: aOrder }, { order: bOrder }) => {
  if (aOrder < bOrder) {
    return -1;
  }
  if (aOrder > bOrder) {
    return 1;
  }
  return 0;
};

const NavLeft = () => {
  const [navigationLinks, setNavigationLinks] = useState([]);
  const [navigationLinksFetched, setNavigationLinksFetched] = useState(false);
  const [navigationLinksError, setNavigationLinksError] = useState(false);

  useEffect(() => {
    axios('http://localhost:1337/navigations', {
      params: {
        active: true
      }
    })
      .then(({ data }) => {
        setNavigationLinksFetched(true);
        setNavigationLinksError(false);
        setNavigationLinks(data);
      })
      .catch(error => {
        setNavigationLinksFetched(false);
        setNavigationLinksError('could not fetch navigation links');
      });
  }, []);
  return (
    <div className="nav__navigation left-navigation">
      <span className="logo">
        <a className="logo-link" href="#somethign">
          FITNE<span className="orange">SS</span>
        </a>
      </span>
      {navigationLinksFetched && (
        <ul className="nav-links nav-list">
          {navigationLinks.sort(byOrder).map(({ title, link }) => {
            return (
              <li className="nav-item" key={title}>
                <a className="nav-link" href={link}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      {navigationLinksError && <div>{navigationLinksError}</div>}
    </div>
  );
};

const NavRight = () => {
  return (
    <div className="nav__login right-navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#something">LOGIN</a>
        </li>
        <li className="nav-item">
          <a href="#s">SIGN UP</a>
        </li>
        <li className="nav-item btn btn-secondary">CHOOSE PLAN</li>
      </ul>
    </div>
  );
};

const Intro = () => {
  return (
    <main className="main-section">
      <header className="main-header">
        <nav className="main-header__nav">
          <NavLeft />
          <NavRight />
          <div className="hambergur-bar">
            <i className="fas fa-bars fa-2x"></i>
          </div>
        </nav>
      </header>
      <div className="main-section__info">
        <h1 className="main-heading">
          MAKE YOUR BODY <br />
          <span className="orange">BEAUTIFUL</span>
        </h1>
        <p className="details">lorem Ipsem dolor sit amet. consectetur</p>
        <button className="btn btn-primary">BOOK NOW</button>
      </div>
    </main>
  );
};
export default Intro;
