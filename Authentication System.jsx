import React, { useState } from "react";

function AuthenticationSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Dummy credentials
  const credentials = {
    admin: "admin123",
    user: "user123",
    guest: "guest123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    if (credentials[username] && credentials[username] === password) {
      setMessage(`Login successful! Welcome ${username}.`);
    } else {
      alert("Invalid username or password!");
      setMessage("");
    }
  };

  return (
    <div className="auth-box">
      <h2>Authentication System</h2>

      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default AuthenticationSystem;
