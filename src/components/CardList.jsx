import {persons} from "../data/cardBase.js";
import PersonCard from "./PersonCard.jsx";

const CardList = ({ persons }) => {
  return (
    <main className="card-list">
      {persons.map((person) => (
        <PersonCard key={person.id} {...person} />
      ))}
    </main>
  );
};
export default CardList;