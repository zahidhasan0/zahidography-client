import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const ViewDetails = () => {
  const [reviews, setReviews] = useState([]);

  const serviceDetails = useLoaderData();

  const { user } = useContext(AuthProvider);
  //   console.log(user.email, user.photoURL, user.uid, user.displayName);
  //   const { email, uid, photoURL, displayName } = user;
  const { _id, name, img, price, ratings, description } = serviceDetails;
  useEffect(() => {
    fetch("http://localhost:5000/reviews/")
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
    };
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    // console.log(JSON.stringify(reviews));
    fetch(`http://localhost:5000/reviewsByIds`, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  }, []);

  return (
    <div>
      <section>
        <div>
          <div className="card w-4/5 mx-auto card-side bg-base-100 shadow-xl">
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

      <section className="my-12">
        <div>
          <h5 className="text-4xl font-semibold">
            Show reviews about this service
          </h5>

          <div>
            <h5>reviews</h5>
          </div>
        </div>

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
      </section>
    </div>
  );
};

export default ViewDetails;
