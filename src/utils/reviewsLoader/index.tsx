import { reviewsStorage } from '@interfaces/reviewsStorage';

export default async function reviewsLoader(): Promise<reviewsStorage> {
  const reviewsString = localStorage.getItem('reviews');
  return reviewsString ? JSON.parse(reviewsString) : {};
}
