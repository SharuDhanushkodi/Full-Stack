import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice Johnson", present: false },
  { id: 2, name: "Bob Smith", present: false },
  { id: 3, name: "Charlie Brown", present: false },
  { id: 4, name: "Diana Prince", present: false },
];

export default function AttendanceTracker() {
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div className="tracker-container">
      <h1>Attendance Tracker</h1>
      <p className="summary">
        Present: {presentCount} / {students.length}
      </p>

      <ul className="student-list">
        {students.map((student) => (
          <li
            key={student.id}
            className={student.present ? "present" : "absent"}
          >
            <span>{student.name}</span>
            <button onClick={() => toggleAttendance(student.id)}>
              {student.present ? "Mark Absent" : "Mark Present"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
