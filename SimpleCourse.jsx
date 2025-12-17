import { useState } from "react";

function SimpleCourse() {
  const [courseName, setCourseName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!courseName.trim()) {
      alert("Please enter a course name.");
      return;
    }

    setEnrolledCourses([...enrolledCourses, courseName.trim()]);
    setCourseName(""); // Clear input
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Course Enrollment</h2>
        <form onSubmit={handleEnroll}>
          <label>Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <button type="submit">Enroll</button>
        </form>
      </div>

      <div className="enrolled-list">
        <h3>Enrolled Courses</h3>
        {enrolledCourses.length === 0 ? (
          <p>No courses enrolled yet.</p>
        ) : (
          <ul>
            {enrolledCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SimpleCourse;
