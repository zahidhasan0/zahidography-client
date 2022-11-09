import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import ReviewCard from "./ReviewCard/ReviewCard";

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([]);
  const { user } = useContext(AuthProvider);
  //   console.log(user?.uid);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsByUID/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, [user?.uid]);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mb-6 mt-12">
        Your Reviews
      </h2>
      <div>
        {userReviews.map((singleReview) => (
          <ReviewCard
            key={singleReview._id}
            singleReview={singleReview}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
