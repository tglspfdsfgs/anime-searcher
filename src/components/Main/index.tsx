import styles from './styles.module.scss';
import AnimeCard from '@components/AnimeCard';

export default function Main() {
  return <main className={styles.contentHolder}>{new Array(12).fill(<AnimeCard />)}</main>;
}
