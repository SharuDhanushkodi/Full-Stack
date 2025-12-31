import React, { useState } from "react";

function UserProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.age || formData.age <= 0) {
      newErrors.age = "Enter a valid age";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSaved(true);
    }
  };

  return (
    <div className="profile-box">
      <h2>Edit User Profile</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}

        <button type="submit">Save Profile</button>
      </form>

      {saved && <p className="success">Profile updated successfully!</p>}
    </div>
  );
}

export default UserProfile;
