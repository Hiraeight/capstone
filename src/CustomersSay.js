// Customersay.js
import React from 'react';
import './CustomersSay.css';

const testimonials = [
  {
    name: 'John Doe',
    rating: 5,
    comment: 'Amazing food and great service!',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Jane Smith',
    rating: 4,
    comment: 'Lovely atmosphere and delicious meals.',
    image: 'https://i.pravatar.cc/150?img=9',
  },
  // Add more testimonials as needed
];

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>Rating: {testimonial.rating} stars</p>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
