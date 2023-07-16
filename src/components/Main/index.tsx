import styles from './styles.module.scss';
import MovieCard from '@components/MovieCard';

export default function Main() {
  return <main className={styles.contentHolder}>{new Array(12).fill(<MovieCard />)}</main>;
}