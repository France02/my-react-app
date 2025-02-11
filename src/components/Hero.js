import React from 'react';
import hero from "../icons_assets/restauranfood.jpg"

const Hero = () => {
  return (
    <section className="hero">
      <div className='hero-text'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Scopri i nostri piatti deliziosi e prenota un tavolo oggi stesso!</p>
      <button>Prenota Ora</button>
      </div>
      <img src={hero} alt="Hero Image" />
    </section>
  );
};

export default Hero;