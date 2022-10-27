import { useContext, useState } from 'react';
import { usePersons } from '../hooks/usePersons';
import { PersonsContext, ModaleContext } from './Main';
import './ModaleAddPerson.css';

function ModaleAddPerson() {
  const { getPersons, setPersons } = useContext(PersonsContext);
  const { getModale, toggleModale } = useContext(ModaleContext);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [year, setYear] = useState('');

  const { addPerson } = usePersons;

  const addPersonForm = () => {
    const id = Math.floor(Math.random() * 9999);
    const p = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      company: company,
      year: year
    };
    const tmp = getPersons;
    tmp.push(p);

    setPersons(tmp);
    addPerson(p);
    toggleModale(false);
  }

  return (
    getModale ? (
      <div className="modale">
        <div className="modaleContent flex flex-col">
          <div className="m-1 text-center">Ajouter une personne</div>

          <form className="flex justify-center p-1">
            <label>Prenom
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="border"
              />
            </label>
            <label>Nom
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="border"
              />
            </label>
            <label>Entreprise
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border"
              />
            </label>
            <label>Année
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border"
              />
            </label>
          </form>

          <button onClick={() => addPersonForm()}>Ajouter</button>
          <button onClick={() => toggleModale(false)}>Close</button>
        </div>
      </div>
    ) : null
  );
}

export default ModaleAddPerson;
