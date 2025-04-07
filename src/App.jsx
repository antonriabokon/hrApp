import { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import './App.css'


const App = () => {
  const people = [
    { name: 'Alice', occupation: 'Engineer', age: 28, pet: 'Dog' },
    { name: 'Bob', occupation: 'Designer', age: 34, pet: 'Cat' },
    { name: 'Charlie', occupation: 'Teacher', age: 41, pet: 'Parrot' },
    { name: 'Diana', occupation: 'Doctor', age: 30, pet: 'Rabbit' },
    { name: 'Lisa', occupation: 'Jornalist', age: 29, pet: 'Fox' }
  ];

  return (
    <div>
      <header>
        <h1>Personal Info Cards</h1>
      </header>

      <main>
        {people.map((person, index) => (
          <div className="card" key={index}>
            <h2>{person.name}</h2>
            <p>Occupation: {person.occupation}</p>
            <p>Age: {person.age}</p>
            <p>Pet: {person.pet}</p>
          </div>
        ))}
      </main>

      <footer>
        <p>&copy; 2025</p>
      </footer>
    </div>
  );
};

export default App;