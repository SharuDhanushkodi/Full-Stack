import React, { useState } from "react";

function CabBooking() {
  const [booking, setBooking] = useState(null);

  const bookCab = () => {
    const name = prompt("Enter your name:");
    if (!name) return;

    const pickup = prompt("Enter pickup location:");
    if (!pickup) return;

    const drop = prompt("Enter drop location:");
    if (!drop) return;

    const cabType = prompt(
      "Choose cab type:\nMini\nSedan\nSUV"
    );
    if (!cabType) return;

    const distance = prompt("Enter distance in km:");
    if (!distance || isNaN(distance)) {
      alert("Please enter a valid distance.");
      return;
    }

    const pricePerKm = 10;
    const totalFare = distance * pricePerKm;

    const confirmBooking = confirm(
      `Confirm Cab Booking?\n\nName: ${name}\nFrom: ${pickup}\nTo: ${drop}\nCab: ${cabType}\nFare: ₹${totalFare}`
    );

    if (confirmBooking) {
      setBooking({
        name,
        pickup,
        drop,
        cabType,
        distance,
        totalFare,
      });
      alert("Cab booked successfully!");
    } else {
      alert("Cab booking cancelled.");
    }
  };

  return (
    <div className="cab-box">
      <h2>Online Cab Booking</h2>
      <button onClick={bookCab}>Book Cab</button>

      {booking && (
        <div className="booking-details">
          <h3>Booking Details</h3>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Pickup:</strong> {booking.pickup}</p>
          <p><strong>Drop:</strong> {booking.drop}</p>
          <p><strong>Cab Type:</strong> {booking.cabType}</p>
          <p><strong>Distance:</strong> {booking.distance} km</p>
          <p><strong>Total Fare:</strong> ₹{booking.totalFare}</p>
        </div>
      )}
    </div>
  );
}

export default CabBooking;
