import React, { useEffect, useState } from "react";
import PhotoDetails from "./PhotoDetails/PhotoDetails";

const PhotoSamples = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/photos")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPhotos(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-2xl w-1/5 mx-auto my-8 border-b-8 pb-5 text-center font-bold">
        Captures
      </h3>
      <div className="grid w-2/5 mx-auto md:grid-cols-2 gap-2 ">
        {photos.map((photo) => (
          <PhotoDetails key={photo._id} photo={photo}></PhotoDetails>
        ))}
      </div>
    </div>
  );
};

export default PhotoSamples;
