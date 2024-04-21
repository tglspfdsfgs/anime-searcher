import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

interface Props {
  searchInputElement: React.MutableRefObject<HTMLInputElement | null>;
}

export default function ReviewLink({ searchInputElement }: Props) {
  const { pathname } = useLocation();

  const isReviewPage = /^\/reviews/i.test(pathname);
  let href = '/reviews';
  if (searchInputElement.current && isReviewPage) {
    href = `/?q=${searchInputElement.current.value}`;
  }
  return (
    <Link className={styles.reviewLink + ' ' + (isReviewPage ? styles.navigated : '')} to={href}>
      Reviews
    </Link>
  );
}
