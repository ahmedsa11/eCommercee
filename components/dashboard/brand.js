import React, { useState, useRef, useEffect } from "react";
import Style from "../../styles/laydashboard.module.css";
import Stylee from "../../styles/contact.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  getBrand,
  getBrands,
  insertBrand,
  deleteBrand,
  updateBrand,
} from "../../redusers/brand";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Loading from "../loading";
const Brand = () => {
  //   const [selectedProduct, setSelectedProduct] = useState({});
  const BrandName = useRef(null);
  const BrandImage = useRef(null);
  const [message, setMessage] = useState({});
  const route = useRouter();
  const dispatch = useDispatch();
  const { isLoading, brands } = useSelector((state) => state.Brand);
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch, brands.length]);
const validation = () => {
  const message = {};
  if (BrandName.current.value === "") {
    message.BrandName = "Name is required";
  }
  if (BrandImage.current.value === "") {
    message.BrandImage = "Image is required";
  }
  setMessage(message);
  return Object.keys(message).length === 0 ? null : message;
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validation();
    if (message) return
    console.log(BrandName.current.value, BrandImage.current.value);
    const formData = new FormData();
    formData.append("name", BrandName.current.value);
    formData.append(
      "image",
      BrandImage.current.files[0],
      BrandImage.current.files[0].name
    );
    console.log(formData);
    dispatch(insertBrand(formData));
    BrandName.current.value = "";
    BrandImage.current.value = "";
  };
  const getbrandid = (brand) => {
    dispatch(getBrand(brand._id));
    route.push({
      pathname: "readupdatebrand",
      query: { brand_id: brand ? brand._id : "" },
    });
  };
  const Brandlist =
    brands.results > 0
      ? brands.data.map((brand) => (
          <tr key={brand._id}>
            <td>{brand.name}</td>
            <td>
              <Image src={brand.image} alt="brand" width="50" height="60" />
            </td>
            <td>
              <button
                className={Style.btnoption}
                onClick={() => getbrandid(brand)}
              >
                Read &#38; Update
              </button>
            </td>
            <td>
              <button
                className={Style.btnoption}
                onClick={() =>
                  dispatch(deleteBrand(brand))
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
            <td>
              {/* <button
              className={Style.btnoption}
              onClick={() => dispatch(updatebrand(brand))}
            >
              Update
            </button> */}
            </td>
          </tr>
        ))
      : null;
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className={Style.sidebar}>
        <a className="active" href="#addb">
          Add Brands
        </a>
        <a href="#allb">All Brands</a>
      </div>
      <div className={Style.content}>
        <div className={Style.addc} id="addb">
          <div className="container">
            <div className={Style.inpst}>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* <div className={Stylee.firstg}> */}
                <div className="form-group">
                  <label htmlFor="name">Brand Name</label>
                  <input
                    type="text"
                    className={`form-control ${Stylee.m}`}
                    id="name"
                    ref={BrandName}
                  />
                  <p className={Stylee.error}>{message && message.BrandName}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="role">Brand Image</label>
                  <input
                  type="file"
                       className={`form-control ${Stylee.m}`}
                    require="true"
                    accept="image/*"
                    ref={BrandImage}
                  />
                  <p className={Stylee.error}>
                    {message && message.BrandImage}
                  </p>
                  <button type="submit" className={Stylee.contsbtn}>
                    {isLoading ? "Loading" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={Style.allc} id="allb">
          <h1>All Brands</h1>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>{Brandlist}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Brand;
