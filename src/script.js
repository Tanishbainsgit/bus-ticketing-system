// Function to handle booking form submission
function handleBookingFormSubmission(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;
    const seats = parseInt(document.getElementById("seats").value, 10);
  
    // Constants
    const pricePerSeat = 10;
  
    // Validation
    if (name && destination && seats > 0) {
      // Calculate fare
      const totalFare = seats * pricePerSeat;
  
      // Display confirmation message
      document.getElementById("message").innerText = 
        `Booking confirmed for ${name} to ${destination}. Seats: ${seats}. Total fare: $${totalFare}.`;
    } else {
      // Display error message if inputs are invalid
      document.getElementById("message").innerText = 
        "Please fill in all fields correctly.";
    }
  }
  
  // Attach git push origin mainevent listener if booking form is present
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingFormSubmission);
  }
  
  // Export function for testing
  module.exports = { handleBookingFormSubmission };
  