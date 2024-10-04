import React from 'react';
import '../CSS/Chicago.css';
import chicagoImage from '../assets/Mario_and_Adrian_A.jpg';


function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <div className="text-column">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subheading">Chicago</h2>
          <p className="description">
            Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.
            We pride ourselves on serving delicious, authentic cuisine with a modern twist. Our
            cozy atmosphere and fresh ingredients make every meal a special experience.
          </p>
        </div>
        <div className="image-column">
          <img src={chicagoImage} alt="Little Lemon Chicago" className="chicago-image" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
