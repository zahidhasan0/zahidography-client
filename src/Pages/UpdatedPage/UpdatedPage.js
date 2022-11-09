import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdatedPage = () => {
  const updatableReview = useLoaderData();
  console.log(updatableReview);

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    console.log(text);

    fetch(`http://localhost:5000/reviews/${updatableReview?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/myreview");
        console.log(data);
      });
  };

  return (
    <div className="my-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Review : ZahidograhY </title>
      </Helmet>
      <h3 className="text-3xl font-semibold text-center my-12">
        Update your review
      </h3>
      <form onSubmit={handleUpdate} className=" shadow-lg p-5">
        <textarea
          id="message"
          rows="4"
          name="text"
          defaultValue={updatableReview.revirewText}
          className="block  w-4/5 mx-auto  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="Drop your valuable review here"
        ></textarea>
        <div className="text-center">
          <button className="btn bg-black text-white my-4" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedPage;
