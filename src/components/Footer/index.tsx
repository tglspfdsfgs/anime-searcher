import styles from './styles.module.scss';
import GitHubLink from '@components/GitHubLink';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <header className={styles.footer}>
        <GitHubLink />
      </header>
    </div>
  );
}
