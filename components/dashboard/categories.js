import React, { useState, useRef, useEffect } from "react";
import Style from "../../styles/laydashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import Stylee from "../../styles/contact.module.css";
import { useRouter } from "next/dist/client/router";
import {
  insertCategory,
  deleteCategory,
  getCategory,
  updateCategory,
  getCategoryById,
} from "../../redusers/categories";
import Image from "next/image";
import Loading from "../loading";
const Categoriesdash = () => {
  const route = useRouter();
  const [selectedProduct, setSelectedProduct] = useState({});
  const CategoryName = useRef(null);
  const CategoryPriority = useRef(null);
  const [message, setMessage] = useState({});
  const Categorybanner = useRef(null);
  const dispatch = useDispatch();
  const { isLoading, Categories } = useSelector((state) => state.categories);
  // useEffect(() => {
  //   dispatch(getCategory());
  // }, [dispatch]);
  const validation = () => {
    const message = {};
    if (CategoryName.current.value === "") {
      message.CategoryName = "Name is required";
    }
    if (CategoryPriority.current.value === "") {
      message.CategoryPriority = "Priority is required";
    }
    if (Categorybanner.current.value === "") {
      message.Categorybanner = "Banner is required";
    }
    setMessage(message);
    return Object.keys(message).length === 0 ? null : message;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validation();
    if (message) return
    const formData = new FormData();
    formData.append(
      "image",
      Categorybanner.current.files[0],
      Categorybanner.current.files[0].name
    );
    formData.append("name", CategoryName.current.value);
    formData.append("priority", CategoryPriority.current.value);
    console.log(formData);
    dispatch(insertCategory(formData));
    CategoryName.current.value = "";
    CategoryPriority.current.value = "";
    Categorybanner.current.value = "";
  };
  const getcategoryid = (category) => {
    dispatch(getCategoryById(category._id));
    route.push({
      pathname: "readupdatecategory",
      query: { category_id: category ? category._id : "" },
    });
  };
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch, Categories.length]);
  const Categorylist =
    Categories.results > 0
      ? Categories.data.map((category) => (
          <tr key={category.id}>
            <td>{category.name}</td>
            <td>{category.priority}</td>
            <td>
              {/* <Image
                src={category.image}
                alt="category"
                width="50"
                height="60"
              /> */}
            </td>
            <td>
              <button
                className={Style.btnoption}
                onClick={() => getcategoryid(category)}
              >
                Read &#38; Update
              </button>
            </td>
            <td>
              <button
                className={Style.btnoption}
                onClick={() =>
                  dispatch(deleteCategory(category))
                    .unwrap()
                    .then((originalPromiseResult) => {
                      console.log(originalPromiseResult);
                    })
                    .catch((rejectedValueOrSerializedError) => {
                      console.log(rejectedValueOrSerializedError);
                      // handle error here
                    })
                }
              >
                Delete
              </button>
            </td>
            <td></td>
          </tr>
        ))
      : null;
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className={Style.sidebar}>
        <a className="active" href="#addc">
          Add Categories
        </a>
        <a href="#allc">All Categories</a>
      </div>
      <div className={Style.content}>
        <div className={Style.addc} id="addc">
          <div className="container">
            <div className={Style.inpst}>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* <div className={Stylee.firstg}> */}
                <div className="form-group">
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    className={`form-control ${Stylee.m}`}
                    id="name"
                    ref={CategoryName}
                  />
                  <p className={Stylee.error}>
                    {message && message.CategoryName}
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="priorty">Category Priority</label>
                  <input
                    type="text"
                    id="priorty"
                    className={`form-control ${Stylee.m}`}
                    ref={CategoryPriority}
                  />

                  <p className={Stylee.error}>
                    {message && message.CategoryPriority}
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="banner">Category Banner</label>
                  <input
                    type="file"
                    id="banner"
                    className={`form-control ${Stylee.m}`}
                    ref={Categorybanner}
                  />
                  <p className={Stylee.error}>
                    {message && message.Categorybanner}
                  </p>
                </div>

                <button type="submit" className={Stylee.contsbtn}>
                  {isLoading ? "Loading" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={Style.allc} id="allc">
          <h1>All Categories</h1>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Priority</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>{Categorylist}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Categoriesdash;
