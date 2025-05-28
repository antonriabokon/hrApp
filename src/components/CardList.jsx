import styles from "./CardList.module.css";
import PersonCard from "./PersonCard.jsx";

const CardList = ({ employees, onUpdateEmployee }) => {
  if (employees.length === 0) {
    return (
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {employees.map((person) => (
        <PersonCard key={person.id} {...person} onUpdate={onUpdateEmployee} />
      ))}
    </div>
  );
};

export default CardList;