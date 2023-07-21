import styles from './styles.module.scss';
import { Form, useLocation } from 'react-router-dom';

export default function Searchbar() {
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search).get('q') || '';
  return (
    <div className={styles.formWrapper}>
      <Form>
        <input
          className={styles.searchField}
          type="search"
          name="q"
          autoComplete="off"
          placeholder="Search"
          defaultValue={searchParam}
        />
      </Form>
    </div>
  );
}
