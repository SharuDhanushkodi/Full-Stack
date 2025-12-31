import React, { useState } from "react";

function LoginInterface() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      setMessage("Please enter username and select a role.");
      return;
    }

    if (role === "admin") {
      setMessage(`Welcome Admin ${username}! Redirecting to Admin Dashboard...`);
    } else if (role === "user") {
      setMessage(`Welcome ${username}! Redirecting to User Home Page...`);
    } else if (role === "guest") {
      setMessage("Welcome Guest! Redirecting to Guest Page...");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <label>Select Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Choose role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>

        <button type="submit">Login</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default LoginInterface;
