import React from "react";

const ReviewDetails = ({ singleReview }) => {
  const { userName, userImg, revirewText } = singleReview;
  return (
    <div>
      <div className="grid mb-5 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-6 w-3/5 mx-auto">
        <figure className="flex flex-col  p-8  bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <figcaption className="flex mb-4 items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={userImg} alt="" />
            <div className="space-y-0.5 font-medium dark:text-white ">
              <div>{userName}</div>
            </div>
          </figcaption>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              {revirewText}
            </p>
          </blockquote>
        </figure>
      </div>
    </div>
  );
};

export default ReviewDetails;
