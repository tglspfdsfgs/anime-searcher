import styles from './styles.module.scss';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <>
      <div className={styles.errorBlock}>
        <h1 className={styles.errorHeader}>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </div>
    </>
  );
}
