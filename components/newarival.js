import React from "react";
import Card from "./card";

const Newarival = ({ products }) => {
  const renderedCards = () => {
    return products.map((product) => {
      return (
        <div key={product._id} className="col-md-4 flexed column align-center">
          <Card product={product} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h1 className="text-center" style={{ color: "#5a5a5a" }}>
        New Arrival
      </h1>
      <div className="row">{renderedCards()}</div>
    </div>
  );
};

export default Newarival;
