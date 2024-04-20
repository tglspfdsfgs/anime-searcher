import React from 'react';
import ReactDOM from 'react-dom/client';
import '@globStyles/normalize.scss';
import '@globStyles/global.scss';
import Root from '@routes/Root';
import ErrorPage from './routes/ErrorPage';
import NotExistingRoute from '@components/NotExistingRoute';
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="*" element={<NotExistingRoute />} />
      <Route index element={<Main />} loader={mainLoader} />
      <Route path="/reviews" element={<Reviews />} loader={reviewsLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
