import Header from '@components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '@components/Footer';
import { ResObect } from '@interfaces/response';

export default function Root() {
  const res = useLoaderData() as ResObect;
  return (
    <>
      <Header />
      <Outlet context={res} />
      <Footer />
    </>
  );
}
