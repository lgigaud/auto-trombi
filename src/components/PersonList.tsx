import PersonItem from './PersonItem';
import { useContext } from 'react';
import { PersonsContext } from './Main';

function PersonList() {
  const { getPersons } = useContext(PersonsContext);

  console.log("render");
  return (
    <div className="flex flex-wrap p-5">
      {getPersons.map((p, i) => <PersonItem person={p} key={i} />)}
    </div>
  );
}

export default PersonList;