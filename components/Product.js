import React, { useEffect, useState } from "react";
import Style from "../styles/product.module.css";

import Chooseimg from "./chooseimg";
import axios from "axios";
import Rating from "@mui/material/Rating";

const Product = ({ productData }) => {
  const [Personalized, setPersonalized] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  console.log(productData);
  const toggleFav = () => {
    if (productData.isFav) {
      console.log("delete request here");
    } else {
      console.log("post request here");
      if (localStorage["token"]) {
        axios
          .post(
            "https://e-commerce-app-api-v1.herokuapp.com/api/v1/wishlists",
            {
              product: productData._id,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage["token"]}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    }
  };
  const addToCart = () => {
    setCartLoading(true);
    axios
      .post(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/carts",
        {
          productId: productData.id,
          color: selectedColor,
          size: "xl",
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage["token"]}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setCartLoading(false);
        setAddedToCart(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <div className="container">
        <div className={Style.product}>
          <div className="row">
            <div className="col-md-6">
              <div className={Style.productImage}>
                <h1>{Personalized}</h1>
                <Chooseimg />
              </div>
            </div>
            <div className="col-md-6">
              <div className={Style.productInfo}>
                <h1 style={{ overflowWrap: "anywhere" }}>
                  {productData.title}
                </h1>
                <h6 style={{ overflowWrap: "anywhere" }}>
                  {productData.description}
                </h6>
                <div className="flexed">
                  <Rating
                    name="read-only"
                    value={Math.round(productData.ratingsAverage)}
                    readOnly
                  />
                  ({productData.ratingsQuantity})
                </div>
                <hr />
                <h4>
                  Price : <span>Rs.{productData.priceAfterDiscount}</span>
                </h4>
                <h4>
                  Quantity : &nbsp;
                  <span
                    className="flexed mb-4 mt-2"
                    style={{ fontSize: "18px" }}
                  >
                    Total quantity: {productData.quantity}
                  </span>
                  <button
                    className={Style.qu}
                    onClick={() => {
                      quantity !== 1 && setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <span>&nbsp; &nbsp;&nbsp;{quantity}&nbsp;&nbsp; &nbsp;</span>
                  <button
                    className={Style.qu}
                    onClick={() => {
                      quantity !== productData.quantity &&
                        setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </h4>
                <h4>Personalized Name :</h4>
                <input
                  type="text"
                  className={Style.av}
                  placeholder="Enter your name"
                  onChange={(e) => setPersonalized(e.target.value)}
                />
                <hr />
                <h4>Color :</h4>
                <div className={Style.color}>
                  {productData.colors &&
                    productData.colors.map((color, i) => {
                      return (
                        <label key={i} className={Style.lab}>
                          <input
                            type="radio"
                            onClick={() => {
                              setSelectedColor(color);
                            }}
                            checked={false}
                            name="color"
                          />
                          <span className={Style.checkmark}>{color}</span>
                        </label>
                      );
                    })}
                </div>
                <h4>Size(US) :</h4>
                <div className={Style.size}>
                  {productData.sizes &&
                    productData.sizes.map((size, i) => {
                      return (
                        <label key={i} className={Style.lab}>
                          <input
                            type="radio"
                            onClick={() => {
                              setSelectedSize(size);
                            }
                            }
                            checked={false}
                            name="size"
                          />
                          <span className={Style.checkmark}>{size}</span>
                        </label>
                      );
                    })}
                  {/* <label className={Style.lab}>
                    {Product}
                    <input type="checkbox" />
                    <span className={Style.checkmark}>1</span>
                  </label>
                  <label className={Style.lab}>
                    <input type="checkbox" />
                    <span className={Style.checkmark}>2</span>
                  </label>
                  <label className={Style.lab}>
                    <input type="checkbox" />
                    <span className={Style.checkmark}>3</span>
                  </label> */}
                </div>
                <span className={Style.do}>
                  Dont Know Your Size? <span>Chick Your Size</span>
                </span>
                <hr />
                <h4>Check Availibility :</h4>
                <input
                  type="text"
                  className={Style.av}
                  placeholder="Pin Code"
                />
                <input type="checkbox" />
                <span className={Style.gift}>Add a Gift Wrap</span>
                <hr />
                <button className={Style.addc} onClick={() => addToCart()}>
                  {!cartLoading && !addedToCart && (
                    <>
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </>
                  )}
                  {cartLoading && <>Loading ... </>}
                  {addedToCart && <>Added to cart</>}
                </button>
                <button className={Style.buy}>Buy Now</button>
                <i
                  className={`fa fa-heart ${Style.fav}`}
                  onClick={toggleFav}
                ></i>
                <h4>
                  Share :&nbsp; <i className="fab fa-facebook"></i>&nbsp;
                  <i className="fab fa-twitter"></i>&nbsp;
                  <i className="fab fa-whatsapp"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
