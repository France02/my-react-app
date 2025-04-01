import React from 'react';
import bruschetta from "../icons_assets/bruchetta.svg";
import salad from '../icons_assets/greek salad.jpg';
import dessert from '../icons_assets/lemon dessert.jpg';

const Highlights = () => {
  return (
    <section className="highlights container">
      <div className="header-container" data-aos="fade-up">
        <h2>This week's specials!</h2>
        <button className="cta-button">Order Now</button>
      </div>
      
      <div className="highlight-items">
        <div className="highlight-item" data-aos="zoom-in-up">
          <img src={salad} alt="Fresh Greek salad with feta and vegetables" loading='lazy' />
          <div className="item-content">
            <div className="header">
              <h4>Greek Salad</h4>
              <p className="price">$12.99</p>
            </div>
            <p className="description">Crispy lettuce, peppers, olives, and Chicago-style feta with garlic-rosemary croutons.</p>
          </div>
        </div>

        <div className="highlight-item" data-aos="zoom-in-up" data-aos-delay="200">
          <img src={bruschetta} alt="Traditional Italian bruschetta with tomatoes" loading='lazy'/>
          <div className="item-content">
            <div className="header">
              <h4>Bruschetta</h4>
              <p className="price">$5.99</p>
            </div>
            <p className="description">Grilled bread with garlic, fresh tomatoes, and extra virgin olive oil.</p>
          </div>
        </div>

        <div className="highlight-item" data-aos="zoom-in-up" data-aos-delay="400">
          <img src={dessert} alt="Authentic lemon dessert with mint" loading='lazy' />
          <div className="item-content">
            <div className="header">
              <h4>Lemon Dessert</h4>
              <p className="price">$5.00</p>
            </div>
            <p className="description">Classic family recipe with homemade lemon curd and whipped cream.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;