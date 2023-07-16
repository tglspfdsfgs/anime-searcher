import styles from './styles.module.scss';

export default function Searchbar() {
  return (
    <div className={styles.formWrapper}>
      <form action="search" method="get">
        <input
          className={styles.searchField}
          type="search"
          name="q"
          autoComplete="off"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
