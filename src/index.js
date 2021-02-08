// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import reportWebVitals from './reportWebVitals';

// Styles
import './index.css';

// Context
import { ContextProvider } from './context/Context';

// Components
import App from './components/App/App';

// Env
const myEnv = dotenv.config();
dotenvExpand(myEnv);

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
