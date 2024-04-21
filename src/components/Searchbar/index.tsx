import { forwardRef } from 'react';
import styles from './styles.module.scss';
import { Form, useLocation, useSubmit } from 'react-router-dom';

const Searchbar = forwardRef<HTMLInputElement>((_props, ref) => {
  const submit = useSubmit();
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search).get('q') || '';

  return (
    <div className={styles.formWrapper}>
      <Form>
        <input
          ref={ref}
          className={styles.searchField}
          type="search"
          name="q"
          autoComplete="off"
          placeholder="Search"
          defaultValue={searchParam}
          onFocus={({ target }) => {
            submit([['q', target.value]], { replace: true });
          }}
          onChange={({ target }) => {
            submit([['q', target.value]], { replace: true });
          }}
        />
      </Form>
    </div>
  );
});

export default Searchbar;
