import React, { useState } from "react";

function HotelReservation() {
  const [reservation, setReservation] = useState(null);

  const makeReservation = () => {
    const name = prompt("Enter your name:");
    if (!name) return;

    const roomType = prompt(
      "Enter room type:\nSingle\nDouble\nSuite"
    );
    if (!roomType) return;

    const nights = prompt("How many nights will you stay?");
    if (!nights || isNaN(nights)) {
      alert("Please enter a valid number of nights.");
      return;
    }

    const confirmBooking = confirm(
      `Confirm Reservation?\n\nName: ${name}\nRoom: ${roomType}\nNights: ${nights}`
    );

    if (confirmBooking) {
      setReservation({ name, roomType, nights });
      alert("Reservation Confirmed!");
    } else {
      alert("Reservation Cancelled.");
    }
  };

  return (
    <div className="hotel-box">
      <h2>Hotel Reservation System</h2>
      <button onClick={makeReservation}>Book a Room</button>

      {reservation && (
        <div className="reservation-details">
          <h3>Reservation Details</h3>
          <p><strong>Name:</strong> {reservation.name}</p>
          <p><strong>Room Type:</strong> {reservation.roomType}</p>
          <p><strong>Nights:</strong> {reservation.nights}</p>
        </div>
      )}
    </div>
  );
}

export default HotelReservation;
