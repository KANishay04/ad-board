import React, { useState } from 'react';
import { useAdContext } from './AdContext';
import './styles.css'; 

const AddAdForm = () => {
  const { dispatch, state } = useAdContext();
  const [text, setText] = useState('');
  const [category, setCategory] = useState(state.categories[0]); 

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD_AD', payload: { id: Date.now(), text, category } }); 
    setText(''); // Сбрасываем значение поля ввода
    setCategory(state.categories[0]); // Сбрасываем категорию на первую по умолчанию
  };

  return (
    <form className="add-ad-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Введите текст объявления"
      />
      <select className="category-select" value={category} onChange={e => setCategory(e.target.value)}>
        {state.categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Добавить объявление</button>
    </form>
  );
};

export default AddAdForm;
