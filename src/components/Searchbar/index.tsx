import styles from './styles.module.scss';
import { Form, useLocation, useSubmit } from 'react-router-dom';

export default function Searchbar() {
  const submit = useSubmit();
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
          onChange={({ target }) => {
            submit([['q', target.value]], { replace: true });
          }}
        />
      </Form>
    </div>
  );
}
