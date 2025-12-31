import React from "react";

function FlightBooking() {
  const handleBooking = () => {
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Passenger name is required!");
      return;
    }

    const from = prompt("Enter Source City:");
    if (!from) {
      alert("Source city is required!");
      return;
    }

    const to = prompt("Enter Destination City:");
    if (!to) {
      alert("Destination city is required!");
      return;
    }

    const seats = prompt("Enter Number of Seats:");
    if (!seats || isNaN(seats) || seats <= 0) {
      alert("Invalid seat number!");
      return;
    }

    const confirmBooking = confirm(
      `Confirm Booking Details:\n\n` +
      `Passenger: ${name}\n` +
      `From: ${from}\n` +
      `To: ${to}\n` +
      `Seats: ${seats}`
    );

    if (confirmBooking) {
      alert(
        `✅ Flight Booked Successfully!\n\n` +
        `Passenger: ${name}\n` +
        `Route: ${from} ➝ ${to}\n` +
        `Seats: ${seats}`
      );
    } else {
      alert("❌ Booking Cancelled.");
    }
  };

  return (
    <div>
      <button onClick={handleBooking}>Book Flight</button>
    </div>
  );
}

export default FlightBooking;
