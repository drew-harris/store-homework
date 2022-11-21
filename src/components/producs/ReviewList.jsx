import React from "react";
import Rating from "../common/Rating";

function ReviewList({ reviews }) {
  return (
    <div className="mt-5">
      <div>
        <span className="fs-4">
          Product Reviews
          <span className="text-muted"> ({reviews?.length})</span>
        </span>
        {reviews?.length === 0 && <BeTheFirst />}
        {reviews?.map((review) => (
          <SingleReview key={review.date} review={review} />
        ))}
      </div>
    </div>
  );
}

function BeTheFirst() {
  return <div className="bg-light p-3 my-3">Be the first to add a review!</div>;
}

function SingleReview({ review }) {
  return (
    <div className="border mb-3">
      {/* this style is technically part of bootstrap docs and theres no other way to get the color  */}
      <div
        className="bg-secondary justify-content-between d-flex flex-row align-items-center pt-1 ps-2"
        style={{ "--bs-bg-opacity": 0.1 }}
      >
        <Rating value={review.rating} />
      </div>
      <div className="bg-light border p-3">
        <div className="d-flex bg-light fs-6 text-muted flex-row alight-items-center justify-content-between">
          <div>{review.userName}</div>
          <div>
            {review.date.toLocaleDateString(review.date.getTimezoneOffset(), {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="mt-2">{review.comment}</div>
      </div>
    </div>
  );
}

export default ReviewList;
