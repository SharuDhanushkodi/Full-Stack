import React, { useState } from "react";

function DynamicRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Online Workshop Registration</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Workshop</label>
        <select
          name="workshop"
          value={formData.workshop}
          onChange={handleChange}
        >
          <option value="">Select Workshop</option>
          <option value="React Basics">React Basics</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>

        <label>Experience Level</label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        
        <button type="submit">Submit</button>
      </div>

      {/* Live Preview */}
      <div className="preview-box">
        <h2>Live Preview</h2>
        <p><strong>Name:</strong> {formData.name || "—"}</p>
        <p><strong>Email:</strong> {formData.email || "—"}</p>
        <p><strong>Workshop:</strong> {formData.workshop || "—"}</p>
        <p><strong>Experience:</strong> {formData.experience || "—"}</p>
      </div>
    </div>
  );
}

export default DynamicRegistration;
