import React, { useEffect, useState } from "react";
import Slidershow from "./Slidershow";
import Card from "./card";
import Detailscat from "./detailscat";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  let active = 2;

  const renderedProducts = () => {
    if (products.length > 0) {
      return products.map((p) => {
        return <Card key={p._id} product={p} />;
      });
    } else {
      return (
        <div className="flexed j-center">
          There is no products for this category
        </div>
      );
    }
  };
  const renderedPagesNumber = () => {
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }
    return pages.map((page) => {
      return (
        <button
          key={page}
          onClick={() => setSelectedPage(page)}
          className="btn btn-brown"
        >
          {page}
        </button>
      );
    });
  };
  let items = [];
  useEffect(() => {
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
  }, []);

  useEffect(() => {
    if (router.query.cat_id) {
      axios
        .get(
          `https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories/${router.query.cat_id}/products`,
          {
            params: {
              limit: 20,
              page: selectedPage,
            },
          }
        )
        .then((res) => {
          setProducts(res.data.data);
          if (res.data.data.length > 0) {
            setNumberOfPages(res.data.paginationResult.numberOfPages);
          }
        });
    }
  }, [router, selectedPage]);
  return (
    <>
      <Slidershow />
      <Pagination>{items}</Pagination>

      <div className="row">
        <div className="col-md-3">
          <Detailscat />
        </div>
        <div className="col-md-9">
          <div className="container flexed column sp-between h-100">
            <h1 className="tac mb-5">
              Products of {router.query.cat ? router.query.cat : ""} category
            </h1>
            <div className="row gap-5 mb-3 sp-between pl-3 pr-3">
              {renderedProducts()}
            </div>
            <div className="flexed j-center gap-5 mb-3 mt-5">
              {renderedPagesNumber()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
