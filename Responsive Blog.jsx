import React, { useState } from "react";

function ResponsiveBlog() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      text: commentInput,
      time: new Date().toLocaleTimeString(),
    };

    setComments([newComment, ...comments]);
    setCommentInput("");
  };

  return (
    <div className="blog-container">
      <div className="blog-post">
        <h1>React JS: Building Interactive UIs</h1>
        <p>
          React is a popular JavaScript library for building user interfaces.
          It allows developers to create reusable UI components and manage
          state efficiently. In this blog post, we explore the basics of React
          and how to build responsive and interactive applications.
        </p>
      </div>

      <div className="comment-section">
        <h2>Comments</h2>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a comment..."
          />
          <button type="submit">Post</button>
        </form>

        <div className="comment-list">
          {comments.length === 0 && <p>No comments yet.</p>}
          {comments.map((c) => (
            <div key={c.id} className="comment-item">
              <p>{c.text}</p>
              <span>{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResponsiveBlog;
