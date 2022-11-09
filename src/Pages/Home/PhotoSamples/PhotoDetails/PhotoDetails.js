import React from "react";
import ChildPhoto from "./ChildPhoto/ChildPhoto";

const PhotoDetails = ({ photo }) => {
  console.log(photo);
  const { iconImg, images } = photo;
  return (
    <div className=" ">
      <img className="" src={iconImg} alt="" />
      {images.map((img) => (
        <ChildPhoto img={img}></ChildPhoto>
      ))}
    </div>
  );
};

export default PhotoDetails;
