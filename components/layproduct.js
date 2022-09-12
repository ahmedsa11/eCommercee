import React from "react";
import Style from "../styles/layproduct.module.css";
import Description from "./description";
import Productsfeature from "./productsfeature";
import Relatedproducts from "./relatedproducts";
const Layproduct = ({ children, productData }) => {
  return (
    <div className={Style.layproduct}>
      {children}
      <br />
      <br />
      <Productsfeature />
      <br />
      <br />
      <Description productData={productData} />
      <br />
      <br />
      <Relatedproducts />
    </div>
  );
};
export default Layproduct;
