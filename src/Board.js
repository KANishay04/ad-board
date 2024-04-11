import React from 'react';
import { useAdContext } from './AdContext';
import AdItem from './AdItem';

const Board = () => {
  const { state } = useAdContext();
  const { ads } = state;

  return (
    <div>
      <h2>Доска объявлений</h2>
      <ul>
        {ads.map(ad => (
          <AdItem key={ad.id} ad={ad} />
        ))}
      </ul>
    </div>
  );
};

export default Board;
