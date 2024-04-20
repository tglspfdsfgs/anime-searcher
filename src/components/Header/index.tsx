import ReviewLink from '@components/ReviewLink';
import styles from './styles.module.scss';
import Searchbar from '@components/Searchbar';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <ReviewLink />
        <Searchbar />
      </header>
    </div>
  );
}
