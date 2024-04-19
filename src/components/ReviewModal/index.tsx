import styles from './styles.module.scss';
interface Props {
  toggleModal: () => void;
}
export default function ReviewModal({ toggleModal }: Props) {
  return (
    <>
      <div className={styles.modalLayer}></div>
      <div className={styles.reviewContainer}>
        <form className={styles.reviewForm}>
          <legend className={styles.titleName}>Title name</legend>
          <textarea
            required
            name="review"
            autoFocus
            placeholder="Share your thoughts on this anime"
            className={styles.textField}
          ></textarea>
          <label className={styles.scoreLabel}>
            Score:{' '}
            <input
              required
              name="score"
              className={styles.scoreInput}
              type="number"
              step="0.25"
              min="0.00"
              max="10.00"
            />
          </label>
          <div className={styles.buttonLine}>
            <button className={styles.submitReview} type="submit">
              Submit
            </button>
            <button onPointerUp={toggleModal} className={styles.cancelReview} type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
