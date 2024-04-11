import React, { createContext, useContext, useReducer } from 'react';
const AdContext = createContext();
const initialState = {
  ads: [],
  categories: ['Работа', 'Жилье', 'Услуги', 'Продажа', 'Разное'], 
};

const adReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_AD':
      return {
        ...state,
        ads: [...state.ads, action.payload],
      };
    case 'DELETE_AD':
      return {
        ...state,
        ads: state.ads.filter(ad => ad.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AdProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adReducer, initialState);

  return (
    <AdContext.Provider value={{ state, dispatch }}>
      {children}
    </AdContext.Provider>
  );
};
export const useAdContext = () => useContext(AdContext);
