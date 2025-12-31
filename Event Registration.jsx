import React, { useState } from "react";

function EventRegistration() {
  const [registration, setRegistration] = useState(null);

  const registerEvent = () => {
    const name = prompt("Enter your name:");
    if (!name) return;

    const email = prompt("Enter your email:");
    if (!email) return;

    const eventName = prompt(
      "Select Event:\nTech Talk\nWorkshop\nCultural Fest"
    );
    if (!eventName) return;

    const confirmRegistration = confirm(
      `Confirm Registration?\n\nName: ${name}\nEmail: ${email}\nEvent: ${eventName}`
    );

    if (confirmRegistration) {
      setRegistration({ name, email, eventName });
      alert("🎉 Registration Successful!");
    } else {
      alert("Registration Cancelled.");
    }
  };

  return (
    <div className="event-box">
      <h2>Event Registration</h2>
      <button onClick={registerEvent}>Register Now</button>

      {registration && (
        <div className="event-details">
          <h3>Registered Details</h3>
          <p><strong>Name:</strong> {registration.name}</p>
          <p><strong>Email:</strong> {registration.email}</p>
          <p><strong>Event:</strong> {registration.eventName}</p>
        </div>
      )}
    </div>
  );
}

export default EventRegistration;
