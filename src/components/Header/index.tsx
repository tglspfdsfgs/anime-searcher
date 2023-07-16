import styles from './styles.module.scss';
import Searchbar from '@components/Searchbar';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Searchbar />
      </header>
    </div>
  );
}
