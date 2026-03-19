import React from 'react';
import './style.css';

import heroImage from '../../../../assets/hero.png';

const Hero_Banner: React.FC = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner__container">
        <div className="hero-banner__text">
          <h2 className="hero-banner__pretitle">UP TO 40% OFF OUR</h2>
          <h1 className="hero-banner__title">CHRISTMAS COLLECTION</h1>
          <p className="hero-banner__description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button className="hero-banner__button" type="button">
            SHOP NOW
          </button>
        </div>

        <div className="hero-banner__media">
          <div className="hero-banner__media-inner">
            <img
              className="hero-banner__image"
              src={heroImage}
              alt="Christmas plates"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Banner;
