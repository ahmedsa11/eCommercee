import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import wishListStyle from "../styles/wishlist.module.css";
const WishList = () => {
  const [items, setItems] = useState([]);
  const getWishList = () => {
    axios
      .get("https://e-commerce-app-api-v1.herokuapp.com/api/v1/wishlists", {
        headers: {
          Authorization: `Bearer ${localStorage["token"]}`,
        },
      })
      .then((res) => {
        console.log(res);
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const renderedList = () => {
    return items.map((item) => {
      return <Card product={item} />;
    });
  };
  useEffect(() => {
    getWishList();
  }, []);
  return (
    <div className={wishListStyle.wishList}>
      <div className="container-fluid">
        <section>
          <div>
            <h1>Wish list</h1>
            <p>
              Here are all your watch later products that you probably love.
            </p>
          </div>
          <span className="btn btn-brown cl-white">Items: 20</span>
        </section>
        <main>{renderedList()}</main>
      </div>
    </div>
  );
};

export default WishList;
