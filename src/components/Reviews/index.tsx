import { useLoaderData, useOutletContext } from 'react-router-dom';
import styles from './styles.module.scss';
import { reviewsStorage } from '@interfaces/reviewsStorage';
import AnimeCard from '@components/AnimeCard';
import { modalInfo } from '@routes/Root';

export default function Reviews() {
  const reviewsData = useLoaderData() as reviewsStorage;
  const modalCB: React.Dispatch<React.SetStateAction<modalInfo>> = useOutletContext();

  const reviewsList = [];
  for (const item in reviewsData) {
    reviewsList.push(
      <AnimeCard
        modalCallback={modalCB}
        key={item}
        image={reviewsData[item].img}
        score={reviewsData[item].score}
        title={item}
        overview={reviewsData[item].review}
      />
    );
  }
  return (
    <>
      <main className={styles.contentHolder}>{reviewsList}</main>
      <div className={styles.pageFiller}></div>
    </>
  );
}
