import { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required");
      return;
    }

    setFeedbackList([...feedbackList, formData]);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Feedback Form</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {feedbackList.length > 0 && (
        <div className="feedback-display">
          <h3>Submitted Feedback</h3>

          {feedbackList.map((item, index) => (
            <div key={index} className="feedback-card">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Message:</strong> {item.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Feedback;
