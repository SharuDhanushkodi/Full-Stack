import React, { useState } from "react";

function FeedbackSystem() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || rating === 0 || !comments.trim()) {
      alert("Please fill all fields and provide a rating.");
      return;
    }

    const newFeedback = { name, rating, comments };
    setFeedbackList([...feedbackList, newFeedback]);

    // Clear form
    setName("");
    setRating(0);
    setComments("");

    alert("Feedback submitted successfully!");
  };

  return (
    <div className="feedback-box">
      <h2>Student Feedback System</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>Select Rating</option>
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Fair</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Very Good</option>
          <option value={5}>5 - Excellent</option>
        </select>

        <label>Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Enter your comments"
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      <div className="feedback-list">
        <h3>Feedback Received</h3>
        {feedbackList.length === 0 && <p>No feedback yet.</p>}
        {feedbackList.map((fb, index) => (
          <div key={index} className="feedback-item">
            <p><strong>{fb.name}</strong> rated <strong>{fb.rating}/5</strong></p>
            <p>{fb.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSystem;
