import img from '../assets/img.jpg';
import type { Person } from './Main';

type PersonProps = {
  person: Person;
};

function PersonItem({ person }: PersonProps) {
  const alttxt = person.firstname + ' ' + person.lastname + "'s picture";

  return (
    <div className="flex flex-col m-4">
      <img src={img} alt={alttxt} className="h-44" />
      <p>{person.firstname}</p>
      <p>{person.lastname}</p>
      <p>{person.company}</p>
      <p>{person.year}</p>
    </div>
  );
}

export default PersonItem;
