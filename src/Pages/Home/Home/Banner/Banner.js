import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded"
      style={{
        backgroundImage: `url("https://storage.googleapis.com/afs-prod/media/afs:Medium:8934600039/3000.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <span>Hello!</span>
            <br /> This is Zahid Hasan <br />
            <span className=" text-right text-2xl font-semibold">
              A Pofessional Photographer.
            </span>
          </h1>

          <p className="mb-5">
            “Photography is a way of feeling, of touching, of loving. What you
            have caught on film is captured forever… It remembers little things,
            long after you have forgotten everything.”
          </p>

          <button className="btn btn-primary">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
