import React from 'react';
import ReactDOM from 'react-dom/client';
import '@globStyles/normalize.scss';
import '@globStyles/global.scss';
import Root from '@Routes/Root';
import ErrorPage from '@Routes/ErrorPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />} errorElement={<ErrorPage />}></Route>)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
