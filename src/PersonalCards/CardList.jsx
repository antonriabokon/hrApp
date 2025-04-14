import {persons} from "./cardBase.js";
import PersonCard from "./PersonCard.jsx";

const CardList = () => {
    return (
        <>
        <main>
            {persons.map((person) => (
                <PersonCard
                key={person.id} {...person} />
            ))}
        </main>
        </>
    )
}
export default CardList;