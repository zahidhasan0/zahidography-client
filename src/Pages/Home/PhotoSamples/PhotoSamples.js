import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhotoSamples = () => {
  const [photos, setPhotos] = useState([]);

  //loading images from the database
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-zahidhasan0.vercel.app/photos"
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-2xl w-1/5 mx-auto my-8 border-b-8 pb-5 text-center font-bold">
        Captures
      </h3>
      <div className="grid w-3/5 mx-auto md:grid-cols-4 gap-2 ">
        {photos.map((photo) => (
          <PhotoProvider>
            <PhotoView src={photo?.img}>
              <img className="w-52" src={photo?.img} alt="" />
            </PhotoView>
          </PhotoProvider>
        ))}
      </div>
    </div>
  );
};

export default PhotoSamples;
