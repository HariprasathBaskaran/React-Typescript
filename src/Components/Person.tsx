import { PersonProps } from "./Types";

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h4>
        {name.first} {name.last}
      </h4>
    </div>
  );
};

export default Person;
