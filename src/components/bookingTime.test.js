// src/components/bookingTimes.test.js
import { initializeTimes, updateTimes } from './Main'; // Adjust the import path based on your file structure

// Mocking the fetchAPI function
jest.mock('path-to-api/api.js', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00']), // Mock fetchAPI to return this array
}));

describe('initializeTimes', () => {
  test('should return the correct initial times from fetchAPI', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00']);
  });
});
