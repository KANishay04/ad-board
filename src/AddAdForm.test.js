import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import AddAdForm from './AddAdForm';
import { useAdContext } from './AdContext';
jest.mock('./AdContext', () => ({
  useAdContext: () => ({
    state: { categories: ['Работа', 'Жилье', 'Услуги'] },
    dispatch: jest.fn(),
  }),
}));

describe('AddAdForm', () => {
  it('добавляет объявление при отправке формы', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<AddAdForm />);
    
    const input = getByPlaceholderText('Введите текст объявления');
    const select = getByTestId('category-select');
    const submitButton = getByText('Добавить объявление');
    
    fireEvent.change(input, { target: { value: 'Тестовое объявление' } });
    fireEvent.change(select, { target: { value: 'Работа' } });
    
    fireEvent.click(submitButton);
    
    expect(useAdContext().dispatch).toHaveBeenCalledWith({
      type: 'ADD_AD',
      payload: {
        id: expect.any(Number),
        text: 'Тестовое объявление',
        category: 'Работа',
      },
    });
  });
});
