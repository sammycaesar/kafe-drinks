import React from "react";
import "./hero.styles.css";
import KafeHero from "../../images/hero-image-coffee.png";

export const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero-box'>
        <div className='column-1'>
          <div className='hero-text'>
            <h1>fancy a delicious drink?</h1>
            <p>
              Presenting a curated collection of the tasiest cafe drinks out
              there. Inspired by korean cafe vlogs.
            </p>
            <div className='search-button'>search</div>
          </div>
        </div>

        <div className='column-2'>
          <div className='image-placement'>
            <img src={KafeHero} alt='Coffee Image' />
          </div>
        </div>
      </div>
    </div>
  );
};
