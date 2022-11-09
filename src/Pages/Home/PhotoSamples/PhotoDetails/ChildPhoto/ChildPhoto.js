import React from "react";

const ChildPhoto = ({ img }) => {
  console.log(img);

  return (
    <div>
      <img src={img.img} alt="" />
    </div>
  );
};

export default ChildPhoto;
