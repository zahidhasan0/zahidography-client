import React from "react";

const ServiceCard = ({ service }) => {
  const { name, img, price, ratings, description } = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{description.slice(0, 100)} ...</p>
          <h6 className="font-bold">Price: ${price}</h6>

          <div className="card-actions justify-center">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
