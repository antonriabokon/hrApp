import PersonCard from "./PersonCard.jsx";

const CardList = ({ employees, onUpdateEmployee }) => {
  console.log("Rendering CardList with", employees);

  if (employees.length === 0) {
    return <p className="loading">Loading employees...</p>;
  }

  return (
    <main className="card-list">
      {employees.map((person) => (
        <PersonCard key={person.id} {...person} onUpdate={onUpdateEmployee} />
      ))}
    </main>
  );
};

export default CardList;
