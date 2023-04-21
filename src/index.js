// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import dotenv from 'dotenv';
// import dotenvExpand from 'dotenv-expand';
import reportWebVitals from './reportWebVitals';

// Styles
import './index.css';

// Context
import { ContextProvider } from './context/Context';

// Components
import App from './components/App/App';

// Env
// const myEnv = dotenv.config();
// dotenvExpand(myEnv);

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// **************************************************

// Before
// unmountComponentAtNode(container);

// // After
// root.unmount();
