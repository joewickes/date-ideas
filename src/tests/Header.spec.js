import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './../context/Context';

import Header from './../components/Header/Header';

import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <ContextProvider>
        <Header />
      </ContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
  );
  root.unmount();
});
