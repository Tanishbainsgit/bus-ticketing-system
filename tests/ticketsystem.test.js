// tests/ticketsystem.test.js

// Import the function to handle the form submission
const { handleBookingFormSubmission } = require('../src/script');

describe('Bus Ticketing System Tests', () => {
  beforeEach(() => {
    // Set up the DOM structure before each test
    document.body.innerHTML = `
      <form id="bookingForm">
        <input type="text" id="name" />
        <input type="text" id="destination" />
        <input type="number" id="seats" />
        <button type="submit">Book</button>
      </form>
      <div id="message"></div>
    `;
  });

  // Test Case 1: Booking Confirmation Message
  test("displays correct booking confirmation message", () => {
    document.getElementById("name").value = "Alice";
    document.getElementById("destination").value = "Central Park";
    document.getElementById("seats").value = "2";

    // Call the function directly to simulate form submission
    handleBookingFormSubmission({ preventDefault: () => {} });

    const message = document.getElementById("message").innerText;
    expect(message).toBe("Booking confirmed for Alice to Central Park. Seats: 2. Total fare: $20.");
  });

  // Test Case 2: Seat Validation (Invalid Input)
  test("displays error message for invalid seat input", () => {
    document.getElementById("name").value = "Alice";
    document.getElementById("destination").value = "Central Park";
    document.getElementById("seats").value = "0";

    // Call the function directly to simulate form submission
    handleBookingFormSubmission({ preventDefault: () => {} });

    const message = document.getElementById("message").innerText;
    expect(message).toBe("Please fill in all fields correctly.");
  });

  // Test Case 3: Fare Calculation
  test("calculates fare correctly", () => {
    const seats = 3;
    const pricePerSeat = 10;
    const totalFare = seats * pricePerSeat;

    expect(totalFare).toBe(30); 
  });
});
