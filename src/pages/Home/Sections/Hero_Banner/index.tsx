import React from 'react';
import './style.css';
//import image1 from '../../assets/images/Hero_Banner/Image1.png';

const Hero_Banner: React.FC = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner__container">
        <div className="hero-banner__text">
          <h2 className="hero-banner__pretitle">UP TO 40% OFF OUR</h2>
          <h1 className="hero-banner__title">CHRISTMAS COLLECTION</h1>
          <p className="hero-banner__description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam nullam neque ultrices.
          </p>
          <button className="hero-banner__button" type="button">
            SHOP NOW
          </button>
        </div>

        <div className="hero-banner__media">
          <div className="hero-banner__media-inner">
            <img
              className="hero-banner__image"
              src="src/assets/images/Hero_Banner/Image1.png"
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