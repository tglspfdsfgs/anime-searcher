import React from 'react';
import ReactDOM from 'react-dom/client';
import '@globStyles/normalize.scss';
import '@globStyles/global.scss';
import App from './App/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
