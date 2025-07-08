import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({});

  useEffect(() => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleAddStudent = (student) => {
    setNewStudent(student);
    fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    })
      .then(response => response.json())
      .then(data => setStudents([...students, data]));
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <AddStudent onAddStudent={handleAddStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;