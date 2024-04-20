import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer';
import { createPortal } from 'react-dom';
import ReviewModal from '@components/ReviewModal';
import { useState } from 'react';

export interface modalInfo {
  open: boolean;
  title: string;
  img: string;
}

export default function Root() {
  const [modalData, setModalData] = useState<modalInfo>({
    open: false,
    title: 'Title name',
    img: '',
  });

  return (
    <>
      <Header />
      <Outlet context={setModalData} />
      <Footer />
      {modalData.open &&
        createPortal(
          <ReviewModal modalData={modalData} modalCallback={setModalData} />,
          document.body
        )}
    </>
  );
}
