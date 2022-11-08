import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/Services/ServiceCard/ServiceCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="my-5 container mx-auto">
      <h2 className="text-4xl font-bold mb-5"> All Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
