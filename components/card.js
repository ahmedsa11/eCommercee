import React from "react";
import Image from "next/image";
import p1 from "../images/p1.jpg";
import Style from "../styles/card.module.css";
import { useRouter } from "next/router";
const Card = ({ product }) => {
  const route = useRouter();

  return (
    <>
      <div
        className={Style.cardd}
        onClick={() =>
          route.push({
            pathname: "product",
            query: { product_id: product ? product._id : "" },
          })
        }
      >
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </figure>
        {product && product.price && product.priceAfterDiscount && (
          <span className={Style.sale}>
            {product &&
              product.price &&
              product.priceAfterDiscount &&
              (
                100 -
                (product.priceAfterDiscount / product.price) * 100
              ).toFixed() + "% Sale!"}
          </span>
        )}
        <div className={Style.cardbody}>
          <Image src={p1} alt="jh" />
        </div>
        {product && <h5>{product.title}</h5>}
        <del>
          {product &&
            product.price &&
            product.priceAfterDiscount &&
            product.price + "$"}
        </del>
        &nbsp; &nbsp;{" "}
        <ins>
          {product &&
            product.priceAfterDiscount &&
            product.priceAfterDiscount + "$"}{" "}
          {product && !product.priceAfterDiscount && product.price + "$"}
        </ins>
      </div>
    </>
  );
};

export default Card;
