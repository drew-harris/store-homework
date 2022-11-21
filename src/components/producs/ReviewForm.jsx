import React, { useState } from "react";
import Rating from "../common/Rating";
import { SelectField } from "../common/SelectField";
import { TextAreaField } from "../common/TextAreaField";
import TextField from "../common/TextField";

function ReviewForm({ onNewReview }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const submit = () => {
    onNewReview({
      rating,
      comment,
      name,
    });
    setRating(1);
    setComment("");
    setName("");
  };

  return (
    <div className="form border container rounded mb-5 pb-3">
      <div className="row p-3 bg-secondary rounded-top text-white fw-bold">
        Add Review
      </div>
      <div className="row p-2">
        <div className="col">
          <TextField
            label="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-4">
          <label className="form-label" htmlFor="rating">
            Rating
          </label>
          <span className=" d-flex ">
            <SelectField
              options={[
                { value: 1, label: "1 stars" },
                { value: 2, label: "2 stars" },
                { value: 3, label: "3 stars" },
                { value: 4, label: "4 stars" },
                { value: 5, label: "5 stars" },
              ]}
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
            <Rating value={rating} />
          </span>
        </div>
      </div>
      <div className="row p-3">
        <TextAreaField
          label={"Comment"}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <span className="ml-3 mb-3">
        <button onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </span>
    </div>
  );
}

export default ReviewForm;
