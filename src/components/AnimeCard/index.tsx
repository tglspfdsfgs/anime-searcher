import styles from './styles.module.scss';
import { modalInfo } from '@routes/Root';

interface Props {
  image?: string | null;
  score: number | null;
  title: string;
  overview: string | null;
  modalCallback: React.Dispatch<React.SetStateAction<modalInfo>>;
  isReview?: boolean;
}

export default function AnimeCard({
  image,
  score,
  title,
  overview,
  modalCallback,
  isReview = false,
}: Props) {
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
        <h3 className={styles.overviewHeader}>{isReview ? 'Review' : 'Overview'}</h3>
        <p className={styles.overviewText}>{overview}</p>
      </div>
      <button
        onPointerUp={() => {
          modalCallback({ open: true, title: title, img: image || '' });
        }}
        className={styles.addReview + ` ${isReview && styles.addReview_reviewBlock}`}
      >
        <span className={styles.addReviewText}>{(isReview ? 'Change' : 'Write') + ' review'}</span>
      </button>
      {isReview && <button className={styles.removeReview}></button>}
    </article>
  );
}
