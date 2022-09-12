import React, { useEffect, useState } from "react";
import CartTableRow from "../components/cart/CartTableRow";

// Table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

// Style
import cartStyle from "../styles/cart.module.css";
import ErrorPage from "./404";

// Component Body
const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [deleteAllLoading, setDeleteAllLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");
  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };
  const applyCouponRequest = () => {
    if (coupon !== "") {
      setCouponLoading(true);
      axios
        .put(
          "https://e-commerce-app-api-v1.herokuapp.com/api/v1/carts/applycoupon",
          {
            coupon,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage["token"]}`,
            },
          }
        )
        .then((res) => {
          setCouponLoading(false);
          setCartData(res.data.data.cartItems);
          setCouponMessage(`Coupon Applied Successfully`);
        })
        .catch((err) => {
          setCouponLoading(false);
          setCouponMessage(`There is no coupon called ${coupon}`);
          console.log(err.response);
        });
    }
  };
  const getCartItems = () => {
    axios
      .get(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/carts",

        {
          headers: {
            Authorization: `Bearer ${localStorage["token"]}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.cartItems);
        setCartData(res.data.data.cartItems);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    getCartItems();
  }, []);

  const deleteAllCartItems = () => {
    setDeleteAllLoading(true);
    axios
      .delete("https://e-commerce-app-api-v1.herokuapp.com/api/v1/carts", {
        headers: {
          Authorization: `Bearer ${localStorage["token"]}`,
        },
      })
      .then((res) => {
        console.log(res);
        setCartData([]);
        setDeleteAllLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setDeleteAllLoading(false);
      });
  };
  if (localStorage["token"]) {
    return (
      <div className="container-fluid flex-auto mb-4">
        <div className="flexed sp-between align-center">
          <h1 className="mt-4 mb-4">Here is Your Shopping Cart</h1>
          {cartData.length !== 0 && (
            <button className="btn btn-brown pt-2 pb-2  ">
              <div className="flexed gap-2 align-center cl-white tac">
                {deleteAllLoading && <>Deleting ...</>}
                {!deleteAllLoading && (
                  <div
                    onClick={() => {
                      deleteAllCartItems();
                    }}
                    className="gap-2 flexed align-center"
                  >
                    <i className="fas fa-trash"></i>
                    Delete All Products
                  </div>
                )}
              </div>
            </button>
          )}
        </div>
        {cartData.length > 0 && (
          <div
            className={`flexed j-center column  mb-3 mt-3  ${cartStyle.applyCoupon}`}
          >
            <div className="flexed j-center w-100 gap-3 mb-2">
              <div className={cartStyle.inputWrap}>
                <input
                  type="text"
                  style={{ textAlign: "left" }}
                  className={`${cartStyle.input}`}
                  placeholder="Add your coupon to price offer"
                  value={coupon}
                  onChange={handleCouponChange}
                />
              </div>
              <button
                className="btn btn-brown cl-white"
                onClick={applyCouponRequest}
              >
                <i
                  className={`fas ${couponLoading ? "fa-spinner" : "fa-check"}`}
                ></i>
              </button>
            </div>
            {couponMessage && <span className="tac">{couponMessage}</span>}
          </div>
        )}

        {cartData.length === 0 && (
          <div className="flexed j-center bg-grey pt-5 pb-5 w-fit m-auto pl-3 pr-3 radius-1 ">
            You Havent any products in your cart
          </div>
        )}
        {cartData.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#cdb6a8" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: "700" }}>
                    Product name
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ color: "#fff", fontWeight: "700" }}
                  >
                    Color
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "#fff", fontWeight: "700" }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "#fff", fontWeight: "700" }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "#fff", fontWeight: "700" }}
                  >
                    Update
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "#fff", fontWeight: "700" }}
                  >
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartData.map((item) => {
                  return (
                    <CartTableRow
                      name={item.product.title}
                      color={item.color}
                      quantity={item.quantity}
                      price={item.price}
                      id={item._id}
                      setNewCartData={(data) => setCartData(data)}
                      pr_id={item.product.id}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  } else {
    return <ErrorPage />;
  }
};

export default Cart;
