import React from 'react';
import bruschetta from "../icons_assets/bruchetta.svg";
import salad from '../icons_assets/greek salad.jpg';
import dessert from '../icons_assets/lemon dessert.jpg';

const Highlights = () => {
  return (
    <section className="highlights container">
      <div className="header-container">
        <h2>This week's specials!</h2>
        <button>Ordina Online</button>
      </div>
      <div className="highlight-items">
        <div className="highlight-item">
          <img src={salad} alt="Dish 1" loading='lazy' />
          <h4>Greek salad</h4>
          <p>$12.99</p>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        </div>
        <div className="highlight-item">
          <img src={bruschetta} alt="Dish 1" loading='lazy'/>
          <h4>Bruchetta</h4>
          <p>$5.99</p>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
        </div>
        <div className="highlight-item">
          <img src={dessert} alt="Dish 1" loading='lazy' />
          <h4>Lemon Dessert</h4>
          <p>$5.00</p>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
        </div>
        
      </div>
    </section>
  );
};

export default Highlights;