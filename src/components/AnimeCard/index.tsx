import styles from './styles.module.scss';
import { modalInfo } from '@routes/Root';

interface Props {
  image?: string | null;
  score: number | null;
  title: string;
  id: number;
  overview: string | null;
  modalCallback: React.Dispatch<React.SetStateAction<modalInfo>>;
}

export default function AnimeCard({ image, score, title, overview, modalCallback }: Props) {
  let scoreHighlight = '';

  if (score !== null) {
    if (score <= 3) {
      scoreHighlight = styles.lowScore;
    } else if (score <= 7) {
      scoreHighlight = styles.mediumScore;
    } else {
      scoreHighlight = styles.highScore;
    }
  }

  return (
    <article className={styles.movieCard}>
      <img
        className={styles.poster}
        src={image || 'notavaliable.jpg'}
        alt={title || 'Poster not avaliable'}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.score + ' ' + scoreHighlight}>{score !== null ? score : 'N/A'}</div>
      </div>
      <div tabIndex={-1} className={styles.overview}>
        <h3 className={styles.overviewHeader}>Overview</h3>
        <p className={styles.overviewText}>{overview}</p>
      </div>
      <button
        onPointerUp={() => {
          modalCallback({ open: true, title: title, img: image || '' });
        }}
        className={styles.addReview}
      >
        <span className={styles.addReviewText}>Write review</span>
      </button>
    </article>
  );
}
