import styles from './styles.module.scss';

interface Props {
  image?: string | null;
  score: number | null;
  title: string;
  overview: string | null;
}

export default function AnimeCard({ image, score, title, overview }: Props) {
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
      <div className={styles.overview}>
        <h3 className={styles.overviewHeader}>Overview</h3>
        <p className={styles.overviewText}>{overview}</p>
      </div>
    </article>
  );
}
