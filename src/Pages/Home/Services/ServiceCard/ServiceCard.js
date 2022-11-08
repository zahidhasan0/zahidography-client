import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { name, img, price, ratings, description } = service;

  return (
    <div>
      <PhotoProvider>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <PhotoView src={img}>
              <img className="h-64" src={img} alt="Shoes" />
            </PhotoView>
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
      </PhotoProvider>
    </div>
  );
};

export default ServiceCard;
