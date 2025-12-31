import React, { useState } from "react";

function StudentManagement() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const students = [
    { id: 1, name: "Alice Johnson", age: 20, grade: "A" },
    { id: 2, name: "Bob Smith", age: 22, grade: "B" },
    { id: 3, name: "Charlie Brown", age: 19, grade: "A+" },
  ];

  const renderDashboard = () => (
    <div className="tab-content">
      <h3>Dashboard</h3>
      <p>Total Students: {students.length}</p>
    </div>
  );

  const renderStudents = () => (
    <div className="tab-content">
      <h3>Student List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderSettings = () => (
    <div className="tab-content">
      <h3>Settings</h3>
      <p>Settings options will go here.</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      <h2>Student Management Dashboard</h2>

      <div className="tabs">
        <button
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={activeTab === "students" ? "active" : ""}
          onClick={() => setActiveTab("students")}
        >
          Students
        </button>
        <button
          className={activeTab === "settings" ? "active" : ""}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>

      <div className="content">
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "students" && renderStudents()}
        {activeTab === "settings" && renderSettings()}
      </div>
    </div>
  );
}

export default StudentManagement;
