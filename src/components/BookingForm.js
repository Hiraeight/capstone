// BookingForm.js
import { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, onDateChange, submitForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (typeof onDateChange === 'function') {
      onDateChange(newDate); // Call the function if it exists
    } else {
      console.error('onDateChange is not a function'); // Debug log if not a function
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!date) newErrors.date = 'Date is required.';
    if (!time) newErrors.time = 'Time is required.';
    if (!guests) newErrors.guests = 'Number of guests is required.';
    if (!occasion) newErrors.occasion = 'Occasion is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and gather form data
    setErrors({});
    const formData = {
      name,
      email,
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  return (
    <div className="booking-container">
      <h1>Book Your Table</h1>
      <p>Reserve a table for your special occasion.</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>
        {errors.time && <p className="error">{errors.time}</p>}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        {errors.guests && <p className="error">{errors.guests}</p>}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && <p className="error">{errors.occasion}</p>}

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
