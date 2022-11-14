import { useState } from 'react';
import img from '../assets/img.png';
import edit from '../assets/edit.png'
import type { Person } from './Main';
import ModaleEditPerson from './ModaleEditPerson';
import './PersonItem.css';

type PersonProps = {
  person: Person;
};

function PersonItem({ person }: PersonProps) {
  const alttxt = person.firstname + ' ' + person.lastname + "'s picture";

  const [openEditPerson, setOpenEditPerson] = useState(false);

  return (
    <div className="flex flex-col m-4 personItem">
      <img src={img} alt={alttxt} className="h-44" />
      <p className="font-bold mt-2">{person.firstname} {person.lastname}</p>
      <p>{person.company}</p>
      <p>{person.year}</p>
      <img className="cursor-pointer w-5 self-end" src={edit} onClick={() => setOpenEditPerson(true)} />
      <ModaleEditPerson person={person} isOpen={openEditPerson} onClose={() => setOpenEditPerson(false)} />
    </div>
  );
}

export default PersonItem;
