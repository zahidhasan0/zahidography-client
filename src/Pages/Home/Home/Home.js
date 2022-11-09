import React from "react";
import PhotoSamples from "../PhotoSamples/PhotoSamples";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Services />
      <PhotoSamples />
    </div>
  );
};

export default Home;
