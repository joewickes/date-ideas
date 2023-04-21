import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './../context/Context';

import App from './../components/App/App';

import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
  );
  root.unmount;
});
