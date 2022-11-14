import { useState } from 'react';
import ModaleAddPerson from './ModaleAddPerson';
import './banner.css';

function Banner() {
  const [openAddPerson, setOpenAddPerson] = useState(false);

  return (
    <div className="flex justify-between p-4 banner">
      <div className="font-bold">Trombinoscope</div>
      <button className="addButton" onClick={() => setOpenAddPerson(true)}>Ajouter</button>

      <ModaleAddPerson isOpen={openAddPerson} onClose={() => setOpenAddPerson(false)} />
    </div>
  );
}

export default Banner;
