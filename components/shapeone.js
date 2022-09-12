import React from "react";
import Image from "next/image";
import p1 from "../images/p1.jpg";
import Style from "../styles/shapeone.module.css";
import { useRouter } from "next/router";
const Shapeone = ({ item }) => {
  const router = useRouter();
  return (
    <>
      <div
        className="container "
        onClick={() => {
          router.push({
            pathname: "/product",
            query: `product_id=${item._id}`,
          });
        }}
      >
        <div className={`${Style.shapeone} text-center`}>
          <Image src={p1} alt="jh" />
        </div>
        <h3 className={`text-center ${Style.tit}`}>{item.title}</h3>
      </div>
    </>
  );
};
export default Shapeone;
