import styles from './styles.module.scss';
import GitHubLink from '@Components/GitHubLink';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <header className={styles.footer}>
        <GitHubLink />
      </header>
    </div>
  );
}
