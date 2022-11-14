import Banner from '@/components/Banner';
import PersonList from './PersonList';
import { useState, createContext, useEffect, useMemo } from 'react';
import { usePersons } from '../hooks/usePersons';

export type Person = {
  id: number,
  firstname: string;
  lastname: string;
  company: string;
  year: string;
};
type PersonContextType = {
  getPersons: Person[];
  setPersons: (newPerson: Person[]) => void;
  setPerson: (person: Person) => void;
};

export const PersonsContext = createContext<PersonContextType>({
  getPersons: [],
  setPersons: () => { },
  setPerson: () => { },
});

function Main() {
  const [getPersons, setPersons] = useState<Person[]>([]);
  const setPerson = (person: Person) => setPersons(getPersons.map(p => p.id === person.id ? person : p))
  const { getAllPersons } = useMemo(() => usePersons, []);

  useEffect(() => {
    getAllPersons().then(p => setPersons(p));
  }, [getAllPersons]);

  return (
    <div>
      <PersonsContext.Provider value={{ getPersons, setPersons, setPerson }}>
        <Banner />
        <PersonList />
      </PersonsContext.Provider>
    </div>
  );
}

export default Main;
