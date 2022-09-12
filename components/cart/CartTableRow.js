import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import cartStyle from "../../styles/cart.module.css";
import { useRouter } from "next/router";

const CartTableRow = ({
  name,
  color,
  quantity,
  price,
  id,
  setNewCartData,
  pr_id,
}) => {
  const router = useRouter();

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [changeQuantity, setChangeQuantity] = useState(false);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [updateQuantityLoading, setUpdateQuantityLoading] = useState(false);

  const handleQuantityChange = (e) => {
    if (e.target.validity.valid) {
      setNewQuantity(e.target.value);
    }
  };
  const updateQuantityRequest = () => {
    setUpdateQuantityLoading(true);
    axios
      .put(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/carts/${id}`,
        {
          quantity: newQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage["token"]}`,
          },
        }
      )
      .then((res) => {
        setUpdateQuantityLoading(false);
        setChangeQuantity(false);
        setNewCartData(res.data.data.cartItems);
        setNewQuantity(quantity);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const deleteCart = (id) => {
    setDeleteLoading(true);
    setDeleteMessage("Deleting ...");
    axios
      .delete(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/carts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage["token"]}`,
          },
        }
      )
      .then((res) => {
        setNewCartData(res.data.data.cartItems);
        setDeleteLoading(false);
        setDeleteMessage("");
      })
      .catch((err) => {
        setDeleteLoading(false);
        setDeleteMessage("Faild");
      });
  };
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        sx={{ cursor: "pointer" }}
        component="th"
        scope="row"
        onClick={() => {
          router.push({
            pathname: "/product",
            query: `product_id=${pr_id}`,
          });
        }}
      >
        {name}
      </TableCell>

      <TableCell
        sx={{ cursor: "pointer" }}
        align="right"
        onClick={() => {
          router.push({
            pathname: "/product",
            query: `product_id=${pr_id}`,
          });
        }}
      >
        {color}
      </TableCell>
      <TableCell sx={{ cursor: "pointer" }} align="right">
        {!changeQuantity && (
          <span
            onClick={() => {
              router.push({
                pathname: "/product",
                query: `product_id=${pr_id}`,
              });
            }}
          >
            {quantity}
          </span>
        )}
        {changeQuantity && (
          <div className={`flexed gap-1 ${cartStyle.updateQuantity}`}>
            <div className={` ${cartStyle.inputWrap}`}>
              <input
                type="text"
                pattern="[0-9]*"
                className={cartStyle.input}
                placeholder="Q"
                value={newQuantity}
                onChange={handleQuantityChange}
              />
              <div className={cartStyle.maxQuantity}>max 400</div>
            </div>
            <button
              className="btn btn-brown cl-white"
              onClick={updateQuantityRequest}
            >
              <i
                className={`fas  ${
                  updateQuantityLoading ? "fa-spinner" : "fa-check"
                }`}
              ></i>
            </button>
          </div>
        )}
      </TableCell>
      <TableCell
        sx={{ cursor: "pointer" }}
        align="right"
        onClick={() => {
          router.push({
            pathname: "/product",
            query: `product_id=${pr_id}`,
          });
        }}
      >
        {price}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => {
          setChangeQuantity(!changeQuantity);
          setNewQuantity(quantity);
        }}
      >
        <i className="fas fa-pen icon ml-auto"></i>
      </TableCell>
      <TableCell
        align="right"
        onClick={() => {
          deleteCart(id);
        }}
      >
        {deleteLoading && deleteMessage !== "" && deleteMessage}

        {!deleteLoading && deleteMessage !== "" && deleteMessage}

        {!deleteLoading && deleteMessage === "" && (
          <i className="fas fa-trash icon ml-auto"></i>
        )}
      </TableCell>
    </TableRow>
  );
};

export default CartTableRow;
