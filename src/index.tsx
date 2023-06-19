import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './mocks/worker';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

worker.start();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);