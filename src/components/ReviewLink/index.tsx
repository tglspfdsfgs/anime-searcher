import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function ReviewLink() {
  return (
    <Link className={styles.reviewLink} to={'/reviews'}>
      Reviews
    </Link>
  );
}
