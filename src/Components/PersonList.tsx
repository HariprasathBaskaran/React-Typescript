import { PersonListProps } from "./Types";

const PersonList = ({ PersonDetails }: PersonListProps) => {
  return (
    <div>
      {PersonDetails.map((person) => (
        <li>
          {person.first} {person.last}
        </li>
      ))}
    </div>
  );
};

export default PersonList;
