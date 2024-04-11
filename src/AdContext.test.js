import React from 'react';
import { render, act } from '@testing-library/react';
import { AdProvider, useAdContext } from './AdContext';

test('AdProvider предоставляет корректный контекст', () => {
  let contextValue;
  render(
    <AdProvider>
      <TestComponent />
    </AdProvider>
  );

  function TestComponent() {
    const context = useAdContext();
    contextValue = context;
    return null;
  }
  expect(contextValue.state).toBeDefined();
  expect(contextValue.dispatch).toBeDefined();
});
