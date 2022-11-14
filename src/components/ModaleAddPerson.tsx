import { useContext, useState } from 'react';
import { usePersons } from '../hooks/usePersons';
import { PersonsContext } from './Main';
import './ModaleAddPerson.css';

type PropsType = { isOpen: boolean, onClose: () => void }

function ModaleAddPerson({ isOpen, onClose }: PropsType) {
  const { getPersons, setPersons } = useContext(PersonsContext);

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
    setPersons([...getPersons, p]);
    addPerson(p);

    console.log(getPersons);
    onClose();
  }

  return (
    isOpen ? (
      <div className="modale">
        <div className="modaleContent flex flex-col items-center">
          <div className="m-1 text-center font-bold">Ajouter une personne</div>

          <form className="flex flex-col p-1">
            <label>Prenom<br />
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="border"
              />
            </label>
            <label>Nom<br />
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="border"
              />
            </label>
            <label>Entreprise<br />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border"
              />
            </label>
            <label>Année<br />
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border"
              />
            </label>
          </form>
          <div>
            <button className="addButton m-2" onClick={() => addPersonForm()}>Ajouter</button>
            <button className="closeButton m-2" onClick={() => onClose()}>Close</button>
          </div>
        </div>
      </div>
    ) : null
  );
}

export default ModaleAddPerson;
