import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ContextProvider} from './../context/Context';

import Welcome from './../components/Welcome/Welcome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ContextProvider>
        <Welcome />
      </ContextProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});