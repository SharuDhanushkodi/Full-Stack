import React, { useState } from "react";

const StudentDashboard = () => {
  const [page, setPage] = useState("profile");

  const renderContent = () => {
    switch (page) {
      case "profile":
        return (
          <div>
            <h1>Profile</h1>
            <p>Welcome to your student profile!</p>
          </div>
        );
      case "courses":
        return (
          <div>
            <h1>Courses</h1>
            <ul>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Computer Science</li>
            </ul>
          </div>
        );
      case "grades":
        return (
          <div>
            <h1>Grades</h1>
            <ul>
              <li>Mathematics: A</li>
              <li>Physics: B+</li>
              <li>Computer Science: A-</li>
            </ul>
          </div>
        );
      default:
        return <p>Page not found</p>;
    }
  };

  return (
    <div className="dashboard">
      <div className="app-container">
        <aside className="sidebar">
          <h2>Student Dashboard</h2>
          <ul>
            <li onClick={() => setPage("profile")}>Profile</li>
            <li onClick={() => setPage("courses")}>Courses</li>
            <li onClick={() => setPage("grades")}>Grades</li>
          </ul>
        </aside>
        <main className="main-content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default StudentDashboard;
