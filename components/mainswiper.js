import React, { useEffect, useState } from "react";
import Shapeone from "./shapeone";
import Shapethree from "./shapethree";
import Shapetwo from "./shapetwo";
import Swiperr from "./swiper";
import About from "./about";
import Newarival from "./newarival";
import Info from "./info";
import Feature from "./featured";
import axios from "axios";
const Mainswiper = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let res = await axios.get(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/products"
      );
      setProducts(res.data.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Swiperr
        user={products}
        pagination={true}
        slidesPerView={4}
        spaceBetween={30}
      >
         <Shapeone /> 

      </Swiperr>
      <hr />
      <About />
      <hr />
      <Newarival products={products.slice(0, 3)} />
      <Info />
      <Feature />
      <Swiperr
        user={products}
        pagination={true}
        slidesPerView={1}
        spaceBetween={0}
      >
        <Shapetwo />
      </Swiperr>
      <hr />
      <Swiperr
        user={products}
        pagination={true}
        slidesPerView={1}
        spaceBetween={0}
      >
        <Shapethree />
      </Swiperr>
    </>
  );
};

export default Mainswiper;
