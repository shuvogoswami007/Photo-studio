import React from "react";
import MainHeader from "../../Images/MainHeader.jpg";

const HeaderMain = () => {
  return (
    <main
      style={{ height: "730px" }}
      className="row d-flex align-items-center w-100"
    >
      <div className="col-md-4 offset-md-1">
        <img
          src={MainHeader}
          alt=""
          className="img-fluid"
          style={{ height: "600px" }}
        />
      </div>
      <div className="col-md-7 text-white">
        <h1 className="text-uppercase">Make your Wedding A Wonderful Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
          similique?
        </p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </main>
  );
};

export default HeaderMain;
