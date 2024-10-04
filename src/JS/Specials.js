// Specials.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Specials.css'; // Optional: Create this CSS file if you need specific styling
import brushetta from '../assets/Brushetta.jpg'
import grilledFish from '../assets/Grilled_Fish.jpg'
import greekSalad from '../assets/greek_salad.jpg'


const specialsData = [
    {
        title: 'Greek Salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: '$12.99',
        image: greekSalad,
        link: '/', 
    },
    {
        title: 'Brushetta',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes, oregano and fresh bazil.',
        price: '$7.99',
        image: brushetta,
        link: '/', 
    },
    {
        title: 'Grilled Fish',
        description: 'Placeat nobis veniam perspiciatis sequi amet dolorum tenetur quidem, assumenda minus accusamus eos velit culpa veritatis iste ipsum. Repudiandae iusto odio eligendi?',
        price: '$20.99',
        image: grilledFish,
        link: '/', 
    },
];

  function Specials() {
    return (
      <section className="specials">
        <div className="title-specials">
            <div className="heading-title">
                <h2 className="spcecials-heading">This Weeks Specials!</h2>
            </div>
            <div className="button-title">
                <Link to="/under-construction" className="special-button">Online Menu</Link>
            </div>
        </div>
        <div className="specials-list">
            <>
                {specialsData.map((special, index) => (
                    <article key={index} className="specials-container">
                        <div className="specials-images">
                            <img src={special.image} alt={special.title} className="special-image" />
                        </div>
                        <div className="specials-header">
                            <h3 className="header-title">{special.title}</h3>
                            <p className="header-price">{special.price}</p>
                        </div>
                        <div className="specials-description">
                            <h4 className="description-text">{special.description}</h4>
                        </div>
                        <div className="specials-button">
                            <Link to="/under-construction" className="order-button">Order a Delivery</Link>
                        </div>
                    </article>
                ))}
            </>
        </div>
      </section>
    );
  }  

export default Specials;
