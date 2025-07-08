import React, { useState } from 'react';

const AddStudent = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddStudent({ name, email, grade });
    setName('');
    setEmail('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Grade:
        <input type="number" value={grade} onChange={(event) => setGrade(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
```

This is a basic React application for a student management system. It includes a list of students and a form to add new students. The data is not persisted and is lost when the application is restarted. You can add backend API endpoints to persist the data.