import React from "react";
import Card from "./card";
const Feature = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{ color: "#5a5a5a" }}>
          Feature Products
        </h1>
        <div className="row">
          <div className="col-md-4 flexed column align-center">
            <Card />
          </div>
          <div className="col-md-4 flexed column align-center">
            <Card />
          </div>
          <div className="col-md-4 flexed column align-center">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
