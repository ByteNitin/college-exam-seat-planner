// This component allocates exam seats using a greedy approach

import { useState } from "react";

function AllocateExam({ classrooms }) {
  const [students, setStudents] = useState("");
  const [result, setResult] = useState(null);

  const allocateSeats = () => {
    let totalStudents = Number(students);

    if (!totalStudents || totalStudents <= 0) {
      alert("Enter valid number of students");
      return;
    }

    let sortedRooms = [...classrooms].sort(
      (a, b) => a.floorNo - b.floorNo
    );

    let allocated = [];
    let totalSeats = 0;

    for (let room of sortedRooms) {
      allocated.push(room);
      totalSeats += room.capacity;

      if (totalSeats >= totalStudents) break;
    }

    if (totalSeats < totalStudents) {
      setResult("Not enough seats available");
    } else {
      setResult(allocated);
    }
  };

  return (
    <div className="card">
      <h2>Allocate Exam Seats</h2>

      <input
        type="number"
        placeholder="Total Students"
        value={students}
        onChange={(e) => setStudents(e.target.value)}
      />

      <button onClick={allocateSeats}>Allocate</button>

      <div className="output">
        {typeof result === "string" && <p className="error">{result}</p>}

        {Array.isArray(result) && (
          <>
            <h3>Allocated Classrooms</h3>
            <ul>
              {result.map((room, i) => (
                <li key={i}>
                  {room.roomId} (Floor {room.floorNo}, Seats {room.capacity})
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AllocateExam;
