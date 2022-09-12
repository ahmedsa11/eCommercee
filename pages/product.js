import React, { useEffect, useState } from "react";
import Layproduct from "../components/layproduct";
import Product from "../components/Product";
import { useRouter } from "next/router";
import axios from "axios";
import Read from "./readupdatebrand";

const Productt = () => {
  const route = useRouter();

  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    axios
      .get(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/products/${route.query.product_id}`
      )
      .then((res) => {
        setProductData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    if (route.query.product_id) {
      getProductData();
      document.addEventListener("reGetProductData", () => {
        getProductData();
      });
    }
    // eslint-disable-next-line
  }, [route.query.product_id]);
  return (
    <>
      <Layproduct productData={productData}>
        <Product productData={productData} />
      </Layproduct>
    </>
  );
};
export default Productt;
