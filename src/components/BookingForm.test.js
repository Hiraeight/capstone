import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

// Mock function for dispatch and submitForm
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

describe('BookingForm JavaScript Validation', () => {
  beforeEach(() => {
    render(
      <BookingForm 
        availableTimes={['17:00', '18:00']} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );
  });

  test('Submit button is disabled when form is invalid', async () => {
    const user = userEvent.setup();
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    expect(submitButton).toBeDisabled(); // Initially disabled

    const dateInput = screen.getByLabelText(/choose date/i);
    await user.type(dateInput, '2024-09-15');

    const timeSelect = screen.getByLabelText(/choose time/i);
    await user.selectOptions(timeSelect, '17:00');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    await user.clear(guestsInput);
    await user.type(guestsInput, '0'); // Invalid input
    expect(submitButton).toBeDisabled(); // Should still be disabled due to guests being zero

    await user.clear(guestsInput);
    await user.type(guestsInput, '2'); // Valid input
    expect(submitButton).not.toBeDisabled(); // Should now be enabled
  });

  test('Form submission calls submitForm when valid', async () => {
    const user = userEvent.setup();

    const dateInput = screen.getByLabelText(/choose date/i);
    await user.type(dateInput, '2024-09-15');

    const timeSelect = screen.getByLabelText(/choose time/i);
    await user.selectOptions(timeSelect, '17:00');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    await user.clear(guestsInput);
    await user.type(guestsInput, '3');

    const occasionSelect = screen.getByLabelText(/occasion/i);
    await user.selectOptions(occasionSelect, 'Birthday');

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    await user.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2024-09-15',
      time: '17:00',
      guests: 3,
      occasion: 'Birthday',
    });
  });
});
