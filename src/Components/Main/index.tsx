import styles from './styles.module.scss';
import MovieCard from '@Components/MovieCard';

export default function Main() {
  return <main className={styles.contentHolder}>{new Array(12).fill(<MovieCard />)}</main>;
}
