import { useState } from "react";
import AddClassroom from "./components/AddClassroom";
import ClassroomList from "./components/ClassroomList";
import AllocateExam from "./components/AllocateExam";

function App() {
  const [classrooms, setClassrooms] = useState([]);

  return (
    <div className="container">
      <h1>🎓 College Exam Seat Planner</h1>

      <AddClassroom classrooms={classrooms} setClassrooms={setClassrooms} />

      <ClassroomList classrooms={classrooms} />

      <AllocateExam classrooms={classrooms} />
    </div>
  );
}

export default App;
