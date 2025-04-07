import { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import './App.css'


const App = () => {
  const people = [
    { name: 'Alice', occupation: 'Engineer', salary: 2800, phone: '0401232323', email: 'alice@email.com', pet: 'Dog' },
    { name: 'Bob', occupation: 'Designer', salary: 3400, phone: '0410899827', email: 'bob@email.com', pet: 'Cat' },
    { name: 'Charlie', occupation: 'Teacher', salary: 4100, phone: '0403879655', email: 'charlie@email.com', pet: 'Fish' },
    { name: 'Diana', occupation: 'Doctor', salary: 3000, phone: '0409887234', email: 'diana@email.com', pet: 'Eagle' },
    { name: 'Lisa', occupation: 'Jornalist', salary: 2900, phone: '0414495676', email: 'lisa@email.com', pet: 'Fox' },
    { name: 'John', occupation: 'Software developer', salary: 5900, phone: '0403557423', email: 'john@email.com', pet: 'Dinosaur' },
    { name: 'Lara', occupation: 'Police officer', salary: 3600, phone: '0403771122', email: 'lara@email.com', pet: 'Horse' },
    { name: 'Timo', occupation: 'Hairdresser', salary: 1900, phone: '0528763561', email: 'timo@email.com', pet: 'Snake' }
  ];

  return (
    <div>
      <header>
        <h1>HR application</h1>
      </header>

      <main>
        {people.map((person, index) => (
          <div className="card" key={index}>
            <h2>{person.name}</h2>
            <p>Occupation: {person.occupation}</p>
            <p>Salary: {person.salary}</p>
            <p>Phone: {person.phone}</p>
            <p>Email: {person.email}</p>
            <p>Pet: {person.pet}</p>
          </div>
        ))}
      </main>

      <footer>
        <p>&copy; 2025. REACT25K. Business College Helsinki</p>
      </footer>
    </div>
  );
};

export default App;