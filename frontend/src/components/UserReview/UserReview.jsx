import React from 'react';
import './UserReview.css';

const reviews = [
  {
    id: 1,
    name: 'Emily R.',
    review: 'The food was amazing! I ordered the pasta and it was perfectly cooked.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jake M.',
    review: 'Fast delivery and great flavors. Highly recommend CraveCart!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sofia L.',
    review: 'The chefs really know what they are doing. Loved every bite.',
    rating: 5,
  },
];

export default function UserReviews() {
  return (
    <section className="user-reviews">
      <h3>What Our Customers Say</h3>
      <div className="reviews-container">
        {reviews.map((r) => (
          <div key={r.id} className="review-card">
            <p className="review-text">{r.review}</p>
            <p className="reviewer-name"> {r.name}</p>
            <div className="review-rating">
              {Array(r.rating).fill('⭐').join('')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
