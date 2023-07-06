import React from "react";
import "../../styles/portfolio.css";
import IMG from "../../assets/tokito.jpg";
import CRYPTO from '../../assets/crypto.jpg';
import CLIMA from '../../assets/clima.jpg';
import PIXABAY from '../../assets/pixabay.jpg';

// Hacer un array de objetos para unn .map para el portfolio

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={CRYPTO} alt="img"></img>
          </div>
          <h3>Crypto App</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/JuanCarlosFR26/39-Proyecto---Criptomonedas-JS.git" className="btn" target="_blank">
              Github
            </a>
            <a href="https://objective-galileo-45de1f.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={CLIMA} alt="img"></img>
          </div>
          <h3>Clima App</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/JuanCarlosFR26/Proyecto36---CLima-JavaScript.git" className="btn" target="_blank">
              Github
            </a>
            <a href="https://ecstatic-haibt-ddc3a0.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={PIXABAY} alt="img"></img>
          </div>
          <h3>Images Pixabay API</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/JuanCarlosFR26/PROYECTO38---Pixabay-API.git" className="btn" target="_blank">
              Github
            </a>
            <a href="https://beamish-naiad-706ee9.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
