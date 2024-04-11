import React from 'react';
import { useAdContext } from './AdContext'; 
const AdItem = ({ ad }) => {
  const { dispatch } = useAdContext();

  const handleDelete = () => {
    dispatch({ type: 'DELETE_AD', payload: ad.id });
  };

  return (
    <div className="ad-card">
      <div className="ad-content">
        <span>{ad.text}</span>
        <span className="category">{ad.category}</span>
      </div>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default AdItem;
