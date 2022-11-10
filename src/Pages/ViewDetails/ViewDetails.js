import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import ReviewDetails from "./ReviewDetails/ReviewDetails";
import { Helmet } from "react-helmet";

const date = new Date();

const ViewDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsByService, setReviewByService] = useState([]);

  const serviceDetails = useLoaderData();

  const { user } = useContext(AuthProvider);
  //   console.log(user.email, user.photoURL, user.uid, user.displayName);
  //   const { email, uid, photoURL, displayName } = user;
  const { _id, name, img, price, ratings, description } = serviceDetails;
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-zahidhasan0.vercel.app/reviews/"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);

  const handleReviewBox = (event) => {
    event.preventDefault();
    const text = event.target.text.value;

    event.target.reset();
    const reviewDetails = {
      serviceName: name,
      serviceId: _id,
      userName: user.displayName,
      userEmail: user.email,
      userUid: user.uid,
      userImg: user.photoURL,
      revirewText: text,
      serviceImg: img,
      reviewDate: date,
    };
    fetch(
      `https://b6a11-service-review-server-side-zahidhasan0.vercel.app/reviews`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-zahidhasan0.vercel.app/reviewsByID/${_id}`
    )
      .then((res) => res.json())
      .then((data) => setReviewByService(data));
  }, [_id]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>View Details : ZahidograhY </title>
      </Helmet>
      <section>
        <div>
          <div className="card w-4/5 mx-auto md:card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="font-bold">Price: ${price}</p>
              <p className="font-bold">
                Ratings: <span className=" text-amber-600">{ratings}</span>
              </p>
              <p>
                <span className="font-bold">About the service:</span>
                <br />
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="my-12">
          <h5 className="text-4xl text-center my-5 font-semibold">
            Reviews of this service
          </h5>

          <div>
            {reviewsByService.map((singleReview) => (
              <ReviewDetails
                key={singleReview._id}
                singleReview={singleReview}
              ></ReviewDetails>
            ))}
          </div>
        </div>

        {user?.email ? (
          <div>
            <form
              onSubmit={handleReviewBox}
              className="py-10 shadow-md w-4/5 mx-auto "
            >
              <label
                htmlFor="message"
                className="block mb-2  font-medium text-gray-900 dark:text-gray-400 text-center text-xl"
              >
                Drop Your Review
              </label>
              <textarea
                id="message"
                rows="4"
                name="text"
                className="block  w-4/5 mx-auto  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="Drop your valuable review here"
              ></textarea>

              <div className="text-center mr-5 mt-5">
                <button className="btn btn-dark rounded-lg" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <h4 className="text-xl font-bold text-dark text-center ">
            {" "}
            <Link className="text-white bg-slate-900" to="/login">
              Login
            </Link>{" "}
            for write your review.
          </h4>
        )}
      </section>
    </div>
  );
};

export default ViewDetails;
