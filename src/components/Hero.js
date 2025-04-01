import React from 'react';
import hero from "../icons_assets/restauranfood.jpg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <h1 data-aos="fade-right" data-aos-delay="100">Little Lemon</h1>
          <h4 data-aos="fade-right" data-aos-delay="200">Chicago</h4>
          <p data-aos="fade-right" data-aos-delay="300">
            We are a family owned Mediterranean<br/>
            restaurant, focused on traditional<br/>
            recipes served with a modern twist.
          </p>
          <button 
            className="cta-button"
            data-aos="zoom-in" 
            data-aos-delay="400"
          >
            Prenota Ora
          </button>
        </div>
        <div className="hero-image">
          <img 
            src={hero} 
            alt="Delicious Mediterranean dishes at Little Lemon restaurant"
            data-aos="zoom-in-left"
            data-aos-delay="500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;