// CallToAction.js
import React from 'react';
import './CallToAction.css';
import image from './assets/restauranfood.jpg'; 
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <div className="cta-text">
          <h1 className="cta-h1">Little Lemon</h1>
          <h2 className="cta-h2">Chicago</h2>
          <p className="cta-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            nobis veniam perspiciatis sequi amet dolorum tenetur quidem
          </p>
            <div className="cta-button-title">
              <Link Link to="/booking" className="cta-button">
                Reserve a Table
              </Link>
            </div>
        </div>
        <div className="cta-image">
          <img src={image} alt="Little Lemon" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
