import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getTechs();
    }, 2000);

    //eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    try {
      const res = await fetch('/techs');
      const data = await res.json();
      setTechs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technicial list</h4>
        <ul className='collection'>
          {!loading && techs.map((t) => <TechItem tech={t} key={t.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
