import ReviewLink from '@components/ReviewLink';
import styles from './styles.module.scss';
import Searchbar from '@components/Searchbar';
import { useRef } from 'react';

export default function Header() {
  const searchFormRef = useRef<null | HTMLInputElement>(null);
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <ReviewLink searchInputElement={searchFormRef} />
        <Searchbar ref={searchFormRef} />
      </header>
    </div>
  );
}
