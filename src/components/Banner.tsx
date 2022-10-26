import { useContext } from 'react';
import { ModaleContext } from './Main';

function Banner() {
  const { toggleModale } = useContext(ModaleContext);

  return (
    <div className="flex justify-between p-4">
      <div>Trombinoscope</div>
      <button onClick={() => toggleModale(true)}>Ajouter</button>
    </div>
  );
}

export default Banner;