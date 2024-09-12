// Main.js
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const fetchAvailableTimes = async (date) => {
  // Dummy data for testing; replace with actual API call if needed
  return ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];
};

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    fetchAvailableTimes(today).then(setAvailableTimes);
  }, []);

  // Make sure this is correctly defined as a function
  const handleDateChange = (date) => {
    console.log('handleDateChange called with date:', date); // Debug log
    fetchAvailableTimes(date).then(setAvailableTimes);
  };

  const submitForm = (formData) => {
    // Replace with actual submit logic
    const success = true; // Simulating a successful submission
    if (success) {
      navigate('/confirmed-booking'); // Navigate to confirmation page on success
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <BookingForm
              availableTimes={availableTimes}
              onDateChange={handleDateChange} // Ensure this is correctly passed
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
