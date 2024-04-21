import styles from './styles.module.scss';
import { modalInfo } from '@routes/Root';
import { reviewsStorage } from '@interfaces/reviewsStorage';
import { useNavigate } from 'react-router-dom';

interface Props {
  modalCallback: React.Dispatch<React.SetStateAction<modalInfo>>;
  modalData: modalInfo;
}

export default function ReviewModal({ modalCallback, modalData }: Props) {
  const navigate = useNavigate();

  const closeModal = () => {
    modalCallback((prev) => {
      return { ...prev, open: !prev.open };
    });
  };

  const reviewsString = localStorage.getItem('reviews');
  let reviews: reviewsStorage = reviewsString ? JSON.parse(reviewsString) : {};

  return (
    <>
      <div onPointerUp={closeModal} className={styles.modalLayer}></div>
      <div className={styles.reviewContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);

            reviews = {
              ...reviews,
              [modalData.title]: {
                img: modalData.img,
                review: String(formData.get('review')),
                score: Number(formData.get('score')),
              },
            };
            localStorage.setItem('reviews', JSON.stringify(reviews));

            closeModal();
            navigate('/reviews');
          }}
          className={styles.reviewForm}
        >
          <legend className={styles.titleName}>{modalData.title}</legend>
          <textarea
            required
            name="review"
            autoFocus
            placeholder="Share your thoughts on this anime"
            className={styles.textField}
          >
            {reviews[modalData.title] ? reviews[modalData.title].review : ''}
          </textarea>
          <label className={styles.scoreLabel}>
            Score:{' '}
            <input
              required
              defaultValue={reviews[modalData.title] ? reviews[modalData.title].score : ''}
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
            <button onPointerUp={closeModal} className={styles.cancelReview} type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
