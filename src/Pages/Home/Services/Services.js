import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);


  //loading services from database
  useEffect(() => {
    fetch("http://localhost:5000/home-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="my-24">
      <h3 className="text-2xl w-1/5 mx-auto my-8 border-b-8 pb-5 text-center font-bold">
        Services
      </h3>
      <div className="grid md:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          {" "}
          <button className="btn btn-dark px-6 my-4">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
