import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer';
import { createPortal } from 'react-dom';
import ReviewModal from '@components/ReviewModal';
import { useState } from 'react';

export default function Root() {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  return (
    <>
      <Header />
      <Outlet context={toggleModal} />
      <Footer />
      {isModalOpen && createPortal(<ReviewModal toggleModal={toggleModal} />, document.body)}
    </>
  );
}
