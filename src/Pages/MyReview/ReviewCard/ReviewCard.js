import React from "react";

const ReviewCard = ({ singleReview }) => {
  console.log(singleReview);
  return (
    <div className="card w-4/5 mx-auto my-12 bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary"> </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
