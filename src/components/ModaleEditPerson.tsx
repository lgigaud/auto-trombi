import { usePersons } from '../hooks/usePersons';
import { useContext, useState } from 'react';
import { Person, PersonsContext } from './Main';
import './ModaleAddPerson.css';

type PropsType = { isOpen: boolean, onClose: () => void, person: Person }

function ModaleEditPerson({ isOpen, onClose, person }: PropsType) {

  const [newPerson, setPerson] = useState(person);
  const { setPerson: editPerson, setPersons, getPersons } = useContext(PersonsContext)

  const onEditPerson = () => {
    usePersons.editPerson(newPerson);
    editPerson(newPerson);
    onClose();
  }

  const onDeletePerson = () => {
    setPersons(getPersons.filter((p) => p.id != newPerson.id));
    usePersons.removePerson(newPerson);
    onClose();
  }

  return (
    isOpen ? (
      <div className="modale">
        <div className="modaleContent flex flex-col items-center">
          <div className="m-1 text-center font-bold">Modifier personne</div>
          <div>
            <p>Nom</p>
            <input value={newPerson.firstname} onChange={(e) => setPerson({ ...newPerson, firstname: e.target.value })} />
          </div>
          <div>
            <p>Prenom</p>
            <input value={newPerson.lastname} onChange={(e) => setPerson({ ...newPerson, lastname: e.target.value })} />
          </div>
          <div>
            <p>Entreprise</p>
            <input value={newPerson.company} onChange={(e) => setPerson({ ...newPerson, company: e.target.value })} />
          </div>
          <div>
            <p>Année</p>
            <input value={newPerson.year} onChange={(e) => setPerson({ ...newPerson, year: e.target.value })} />
          </div>
          <div>
            <button className="addButton m-2" onClick={() => onEditPerson()} >Modifier</button>
            <button className="removeButton m-2" onClick={() => onDeletePerson()} >Supprimer</button>
            <button className="closeButton m-2" onClick={() => onClose()} >Close</button>
          </div>
        </div>
      </div>
    ) : null
  );
}

export default ModaleEditPerson;
