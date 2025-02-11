import React from 'react';
import about1 from "../icons_assets/Mario and Adrian A.jpg";
import about2 from "../icons_assets/Mario and Adrian b.jpg";
const About = () => {
  return (
    <section className="about">
      <h2>Little Lemon</h2>
      <h4>Chicago</h4>
      <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.</p>
      <img src={about1}></img>
      <img src={about2}></img>
    </section>
  );
};

export default About;