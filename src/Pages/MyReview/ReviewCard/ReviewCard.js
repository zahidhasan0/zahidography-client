import React, { useEffect, useState } from "react";
import { FaBeer, FaEdit, FaRemoveFormat, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReviewCard = ({ singleReview, handleDelete }) => {
  const [allReviews, setAllReviews] = useState([]);
  console.log(singleReview);
  const { _id, revirewText, serviceName, serviceImg } = singleReview;

  const navigate = useNavigate();

  //   useEffect(() => {
  //     fetch("http://localhost:5000/reviews")
  //       .then((res) => res.json())
  //       .then((data) => setAllReviews(data));
  //   }, []);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/reviewsByUID/${_id}`)
  //       .then((res) => res.json())
  //       .then((data) => setAllReviews(data));
  //   }, [_id]);

  const handleUpdate = () => {
    navigate(`/updatePage/${_id}`);
  };

  //   const handleDelete = () => {
  //     fetch(`http://localhost:5000/reviews/${_id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           const remaining = allReviews.filter((review) => review._id !== _id);
  //           setAllReviews(remaining);
  //         }
  //       });
  //   };

  return (
    <div className="grid mb-5 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-6 w-3/5 mx-auto">
      <figure className="flex flex-col  p-8  bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between">
          <figcaption className="flex mb-4 items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={serviceImg} alt="" />
            <div className="space-y-0.5 font-medium dark:text-white ">
              <div>{serviceName}</div>
            </div>
          </figcaption>
          <div className="flex gap-5">
            <span onClick={() => handleUpdate(_id)}>
              <FaEdit />
            </span>
            <span onClick={() => handleDelete(_id)}>
              <FaTrashAlt />
            </span>
          </div>
        </div>
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
            {revirewText}
          </p>
        </blockquote>
      </figure>
    </div>
  );
};

export default ReviewCard;
