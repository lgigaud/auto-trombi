import Banner from '@/components/Banner';
import PersonList from './PersonList';
import ModaleAddPerson from './ModaleAddPerson';
import { useState, createContext, useEffect } from 'react';
import supabase from '../utils/bddutils';
import { usePersons } from '../hooks/usePersons';

export type Person = {
  id: number,
  firstname: string;
  lastname: string;
  company: string;
  year: string;
};
type ModaleContextType = {
  getModale: boolean;
  toggleModale: (newValue: boolean) => void;
};
type PersonContextType = {
  getPersons: Person[];
  setPersons: (newPerson: Person[]) => void;
};

export const PersonsContext = createContext<PersonContextType>({
  getPersons: [],
  setPersons: () => { },
});
export const ModaleContext = createContext<ModaleContextType>({
  getModale: false,
  toggleModale: () => { },
});

function Main() {
  const [getPersons, setPersons] = useState<Person[]>([]);
  const [getModale, toggleModale] = useState(false);
  const { getPersons: getPersons2 } = usePersons;

  useEffect(() => {
    getPersons2().then(p => setPersons(p))
  }, []);

  return (
    <div>
      <ModaleContext.Provider value={{ getModale, toggleModale }}>
        <PersonsContext.Provider value={{ getPersons, setPersons }}>
          <Banner />
          <PersonList />
          <ModaleAddPerson />
        </PersonsContext.Provider>
      </ModaleContext.Provider>

    </div>
  );
}

export default Main;
