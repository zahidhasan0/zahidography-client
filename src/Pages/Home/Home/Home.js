import React from "react";
import PhotoSamples from "../PhotoSamples/PhotoSamples";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home : ZahidograhY </title>
      </Helmet>
      <Banner />
      <Services />
      <PhotoSamples />
    </div>
  );
};

export default Home;
