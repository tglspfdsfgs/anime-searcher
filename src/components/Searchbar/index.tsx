import styles from './styles.module.scss';
import { Form } from 'react-router-dom';

export default function Searchbar() {
  return (
    <div className={styles.formWrapper}>
      <Form>
        <input
          className={styles.searchField}
          type="search"
          name="q"
          autoComplete="off"
          placeholder="Search"
        />
      </Form>
    </div>
  );
}
