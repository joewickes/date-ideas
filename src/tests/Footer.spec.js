import React from 'react';

import Footer from './../components/Footer/Footer';
import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<Footer />, document.getElementById('root'));
  root.unmount();
});
