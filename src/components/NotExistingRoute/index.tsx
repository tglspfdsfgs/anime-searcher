import styles from './styles.module.scss';

export default function NotExistingRoute() {
  return (
    <div className={styles.errorBlock}>
      <h1 className={styles.errorHeader}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>No route matches URL &quot;{window.location.pathname}&quot;</i>
      </p>
    </div>
  );
}
