import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { _id, name, img, price, ratings, description } = serviceDetails;

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
          <form>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Review
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-4/5 mx-auto"
              placeholder="Drop your valuable review here"
            ></textarea>
            <div>
               <h6>Your ratings: </h6>
               
            </div>
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
