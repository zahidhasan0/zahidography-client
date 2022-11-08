import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { _id, name, img, price, ratings, description } = serviceDetails;

  return (
    <div>
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
    </div>
  );
};

export default ViewDetails;
