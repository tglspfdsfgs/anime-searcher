import { useOutletContext } from 'react-router-dom';
import styles from './styles.module.scss';
import AnimeCard from '@components/AnimeCard';
import { ResObect } from '@interfaces/response';

export default function Main() {
  const res = useOutletContext() as ResObect | null;
  let cardList;
  if (res?.data) {
    res.data = res.data.filter((anime) => {
      return anime?.rating ? !/Rx|Hentai/i.test(anime.rating) : true;
    });
    if (res.data.length === 25) {
      res.data.pop();
    }
    cardList = res.data.map((item, i) => (
      <AnimeCard
        key={i}
        image={item.images.jpg?.image_url}
        score={item.score}
        title={item.title}
        overview={item.synopsis}
      />
    ));
  }
  return (
    <>
      <main className={styles.contentHolder}>{cardList}</main>
      <div className={styles.pageFiller}></div>
    </>
  );
}
