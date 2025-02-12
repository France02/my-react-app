import React from 'react';
import about1 from "../icons_assets/Mario and Adrian A.jpg";
import about2 from "../icons_assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-content container">
      
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h4>Chicago</h4>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.
          </p>
        </div>

        <div className="about-images">
          <img src={about1} alt="Mario and Adrian A" className="image-top" />
          <img src={about2} alt="Mario and Adrian B" className="image-bottom" />
        </div>
      </div>
    </section>
  );
};

export default About;