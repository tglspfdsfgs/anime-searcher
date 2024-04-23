import React from 'react';
import ReactDOM from 'react-dom/client';
import '@globStyles/normalize.scss';
import '@globStyles/global.scss';
import Root from '@routes/Root';
import ErrorPage from './routes/ErrorPage';
import Main from '@components/Main';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import mainLoader from '@utils/mainLoader';
import Reviews from '@components/Reviews';
import reviewsLoader from '@utils/reviewsLoader';

declare global {
  interface Window {
    basePath: string | false;
  }
}

window.basePath = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={window.basePath || '/'} element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Main />} loader={mainLoader} />
      <Route path={window.basePath + '/reviews'} element={<Reviews />} loader={reviewsLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
