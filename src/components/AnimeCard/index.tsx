import styles from './styles.module.scss';

export default function AnimeCard() {
  return (
    <article className={styles.movieCard}>
      <img src="notavaliable.jpg" alt="Poster not avaliable" />
      <div className={styles.info}>
        <h3 className={styles.title}>Title</h3>
        <div className={styles.score}>0.0</div>
      </div>
      <div className={styles.overview}>
        <h3 className={styles.overviewHeader}>Overview</h3>
        <p className={styles.overviewText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </article>
  );
}
