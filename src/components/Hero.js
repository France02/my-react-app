import React from 'react';
import hero from "../icons_assets/restauranfood.jpg"

const Hero = () => {
  return (
    <section className="hero">
      
      <div className='hero-text container'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>We are a family owned Mediterranean<br/>restaurant, focused on traditional<br/> recipes served with a modern twist.</p>
      <button>Prenota Ora</button>
      </div>
      <img src={hero} alt="Hero Image" />
    </section>
  );
};

export default Hero;