import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const renderedPages = () => {
    let arr = [];
    {
      for (let i = 1; i <= pagesNumber; i++) {
        arr.push(i);
      }
    }
    return arr.map((p) => {
      return (
        <button
          onClick={() => {
            setSelectedPage(p);
          }}
          className={`btn btn-brown cl-white ${
            selectedPage === p ? "active" : ""
          }`}
          key={p}
        >
          {p}
        </button>
      );
    });
  };
  const renderCards = () => {
    return (
      products.length !== 0 &&
      products.map((p) => {
        return <Card key={p._id} product={p} />;
      })
    );
  };
  useEffect(() => {
    axios
      .get("https://e-commerce-app-api-v1.herokuapp.com/api/v1/products", {
        params: {
          limit: 12,
          page: selectedPage,
        },
      })
      .then((res) => {
        setProducts(res.data.data);

        setPagesNumber(res.data.paginationResult.numberOfPages);
      });
  }, [selectedPage]);
  return (
    <div className="container-fluid">
      <h1 className="tac mt-2">Shop</h1>
      <div className="flexed  sp-around mt-5 gap-3">{renderCards()}</div>
      <div className="tac mw-auto flexed j-center w-100 mt-1 mb-2 gap-1">
        {renderedPages()}
      </div>
    </div>
  );
};

export default Shop;
