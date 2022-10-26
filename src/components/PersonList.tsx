import PersonItem from './PersonItem';
import { useContext } from 'react';
import { PersonsContext } from './Main';

function PersonList() {
  const { getPersons } = useContext(PersonsContext);

  return (
    <div className="flex p-5">
      {getPersons.map((p, i) => <PersonItem person={p} key={i} />)}
    </div>
  );
}

export default PersonList;