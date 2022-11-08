import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
