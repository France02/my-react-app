import React from 'react';
import chef1 from "../icons_assets/Mario and Adrian A.jpg";
import chef2 from "../icons_assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-wrapper">
          <div className="media-column">
            <div className="image-stack">
              <img 
                src={chef1} 
                alt="Chef Mario preparing fresh ingredients" 
                className="primary-image"
              />
              <img 
                src={chef2} 
                alt="Chefs Mario and Adrian collaborating" 
                className="secondary-image"
              />
            </div>
          </div>

          <div className="content-column">
            <h2 id="about-heading" className="section-title">
              La nostra storia culinaria
            </h2>
            <p className="lead-text">
              Da una piccola trattoria a un punto di riferimento culinario di Chicago:
              scopri il percorso di Mario e Adrian nella creazione di Little Lemon.
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="icon-box">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Tradizione italiana</h3>
                  <p>Ricette tramandate da generazioni con ingredienti freschi</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="icon-box">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12 18.5c-3.5 0-6.5-2.3-6.5-5.2V8c0-2.9 2.9-5.2 6.5-5.2s6.5 2.3 6.5 5.2v5.3C18.5 16.2 15.5 18.5 12 18.5z"/>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Innovazione continua</h3>
                  <p>Menu stagionale che evolve con le migliori produzioni locali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;