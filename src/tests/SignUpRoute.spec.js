import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './../context/Context';

import SignUpRoute from './../routes/SignUpRoute/SignUpRoute';

import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <ContextProvider>
        <SignUpRoute />
      </ContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
  );
  root.unmount();
});
