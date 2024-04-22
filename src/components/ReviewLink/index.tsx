import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
interface Props {
  searchInputElement: React.MutableRefObject<HTMLInputElement | null>;
}

export default function ReviewLink({ searchInputElement }: Props) {
  let { pathname } = useLocation();
    console.log(`window.basePath: ` + window.basePath);
    console.log(`pathname: ` + pathname);
  const relativePath = `${window.basePath || ''}/reviews`;
  const isReviewPage = new RegExp(relativePath, "i").test(pathname);
  let href = relativePath;
  if (searchInputElement.current && isReviewPage) {
    href = `${window.basePath || ''}/?q=${searchInputElement.current.value}`;
  }
  return (
    <Link className={styles.reviewLink + ' ' + (isReviewPage ? styles.navigated : '')} to={href}>
      Reviews
    </Link>
  );
}
