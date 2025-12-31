import React, { useState } from "react";

function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const message = prompt("Enter notification message:");
    if (!message) return;

    const newNotification = {
      id: Date.now(),
      message,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications([newNotification, ...notifications]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="notification-box">
      <h2>Dashboard Notifications</h2>
      <button onClick={addNotification}>Add Notification</button>

      <div className="notification-list">
        {notifications.length === 0 && <p>No notifications yet.</p>}
        {notifications.map((n) => (
          <div key={n.id} className="notification-item">
            <p>
              <strong>{n.time}:</strong> {n.message}
            </p>
            <button onClick={() => removeNotification(n.id)}>Dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationSystem;
