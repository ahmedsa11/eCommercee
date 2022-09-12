import React, { useState, useRef, useEffect } from "react";
import Style from "../../styles/laydashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import Stylee from "../../styles/contact.module.css";
import { subCategories } from "../../redusers/categories";
import {
  insertProducts,
  deleteProducts,
  getProducts,
  getProductbyid,
  insertExcelProducts
} from "../../redusers/productslice";
import { getBrands } from "../../redusers/brand";
import Loading from "../loading";
import { useRouter } from "next/router";
const Productdash = () => {
  const route = useRouter();
  const Excelfile = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState();
  const [message, setMessage] = useState({});
  const [errorr, setError] = useState([]);
  const [selectedID, setSelectedID] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [createinputsize, setCreateinputsize] = useState([]);
  const [createinputcolor, setCreateinputcolor] = useState([]);
  const Name = useRef(null);
  const Category = useRef(null);
  const Productstags = useRef(null);
  const stock = useRef(null);
  const Gallaryimage = useRef(null);
  const Refundable = useRef(null);
  const Cod = useRef(null);
  const ProductVariation = useRef(null);
  const LabourCost = useRef(null);
  const PersonlizedName = useRef(null);
  const Weight = useRef(null);
  const MultipleTax = useRef(null);
  const priceAfterDiscount = useRef(null);
  const ProductDescription = useRef(null);
  const Sizes = useRef([null]);
  const Colors = useRef([null]);
  const Subcategories = useRef(null);
  const imgCover = useRef(null);
  const Brand = useRef(null);
  const dispatch = useDispatch();
  const { isLoading, Products, error } = useSelector((state) => state.Products);
  const { Categories, Subcategory } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.Brand);
  const [col, setCol] = useState();
  console.log(error);
  useEffect(() => {
    setError(error);
  }, [error]);
  const multi=()=>{
    if(typeof window !== 'undefined'){
      document.getElementById("add-product-multiple").style.display="block";
      document.getElementById("add-product").style.display="none";
    }
  }
  const single=()=>{
    if(typeof window !== 'undefined'){
      document.getElementById("add-product-multiple").style.display="none";
      document.getElementById("add-product").style.display="block";
    }
  }
  const validation = () => {
    const message = {};
    if (Name.current.value === "") {
      message.Name = "Name is required";
    }
    if (Category.current.value === "") {
      message.Category = "Category is required";
    }
    if (Productstags.current.value === "") {
      message.Productstags = "Productstags is required";
    }
    if (stock.current.value === "") {
      message.stock = "stock is required";
    }
    if (Gallaryimage.current.value === "") {
      message.Gallaryimage = "Gallaryimage is required";
    }
    if (Refundable.current.value === "") {
      message.Refundable = "Refundable is required";
    }
    if (Cod.current.value === "") {
      message.Cod = "Cod is required";
    }
    if (ProductVariation.current.value === "") {
      message.ProductVariation = "ProductVariation is required";
    }
    if (LabourCost.current.value === "") {
      message.LabourCost = "LabourCost is required";
    }
    if (PersonlizedName.current.value === "") {
      message.PersonlizedName = "PersonlizedName is required";
    }
    if (Weight.current.value === "") {
      message.Weight = "Weight is required";
    }
    if (priceAfterDiscount.current.value === "") {
      message.priceAfterDiscount = "priceAfterDiscount is required";
    }
    if (ProductDescription.current.value === "") {
      message.ProductDescription = "ProductDescription is required";
    }
    if (Sizes.current.value === "") {
      message.Sizes = "Sizes is required";
    }
    if (Colors.current.value === "") {
      message.Colors = "Colors is required";
    }
    if (Subcategories.current.value === "") {
      message.Subcategories = "Subcategories is required";
    }
    if (imgCover.current.value === "") {
      message.imgCover = "imgCover is required";
    }
    if (Brand.current.value === "") {
      message.Brand = "Brand is required";
    }
    if (Excelfile.current.value === "") {
      message.Excelfile = "Excelfile is required";
    }
    setMessage(message);
    return Object.keys(message).length === 0 ? null : message;
  };
  const handleSubmitExcel = (e) => {
    e.preventDefault();
    // const error = validation();
    // if (error) return;
    const formData = new FormData();
    formData.append("excel", Excelfile.current.files[0]);
    dispatch(insertExcelProducts(formData));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validation();
    if (error) return;
    const Product = {
      title: Name.current.value, //text
      description: ProductDescription.current.value, //text area
      quantity: stock.current.value, //number
      category: Category.current.value, //selectbox
      price: LabourCost.current.value, //number
      images: Gallaryimage.current.files[0],
      tags: Productstags.current.value, //text
      multiple_tax: MultipleTax.current.value, //checkbox
      COD: Cod.current.value, //ratio
      refundable: Refundable.current.value, //ratio
      variation: ProductVariation.current.value, //text
      weight: Weight.current.value, //text
      personalized: PersonlizedName.current.value, //ratio
      priceAfterDiscount: priceAfterDiscount.current.value, //text
      colors: Colors.current.value, //array
      sizes: Sizes.current.value, //array
      subcategories: Subcategories.current.value, //text
      brand: Brand.current.value, //text
      imageCover: imgCover.current.files[0], //file
    };
    const formData = new FormData();
    document.getElementsByName("colors").forEach((element) => {
      let color = element.value;
      console.log(color);
      formData.append("colors", color);
    }),
      document.getElementsByName("sizes").forEach((element) => {
        formData.append("sizes", element.value);
      }),
      document.getElementsByName("subcategories").forEach((element) => {
        console.log(element.value);
        formData.append("subcategories", element.value);
      });
    for (let key in Product) {
      formData.append(key, Product[key]);
    }
    dispatch(insertProducts(formData));
    Name.current.value = "";
    Category.current.value = "";
    Productstags.current.value = "";
    stock.current.value = "";
    Gallaryimage.current.value = "";
    Refundable.current.value = "";
    Cod.current.value = "";
    ProductVariation.current.value = "";
    LabourCost.current.value = "";
    PersonlizedName.current.value = "";
    Weight.current.value = "";
    MultipleTax.current.value = "";
    priceAfterDiscount.current.value = "";
    ProductDescription.current.value = "";
    Sizes.current.value = "";
    Colors.current.value = "";
    Subcategories.current.value = "";
    Brand.current.value = "";
    imgCover.current.value = "";
  };
  const getproductt = (product) => {
    dispatch(getProductbyid(product._id));
    route.push({
      pathname: "readupdateproduct",
      query: { product_id: product ? product._id : "" },
    });
  };
  const Productlist =
    Products.results > 0
      ? Products.data.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <button
                className={Style.btnoption}
                onClick={() => getproductt(product)}
              >
                Read &#38; Update
              </button>
            </td>
            <td>
              <button
                className={Style.btnoption}
                onClick={() =>
                  dispatch(deleteProducts(product))
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
  const getCategoryById = () => {
    if (typeof window !== "undefined") {
      const id = document.getElementById("idc").value;
      setSelectedID(id);
      const select = Categories.data.find((cat) => cat.id === id);
      setSelectedCategory((prev) => {
        return { ...prev, ...select };
      });
    } else {
      alert("Try again");
    }
  };
  // }
  useEffect(() => {
    dispatch(subCategories(selectedID));
  }, [selectedID]);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBrands());
  }, [dispatch, Products.length]);
  const addsize = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // const input = document.createElement("input");
      // input.setAttribute("name", "sizes");
      // input.setAttribute("type", "text");
      // input.setAttribute("className", "form-control");
      // input.setAttribute("ref", "Sizes" );
      let count = 1;
      count++;
      setCreateinputsize((prev) => {
        return [...prev, count];
      });
    }
  };
  const addcolor = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // const input = document.createElement("input");
      // input.setAttribute("name", "sizes");
      // input.setAttribute("type", "text");
      // input.setAttribute("className", "form-control");
      // input.setAttribute("ref", "Sizes" );
      let count = 1;
      count++;
      setCreateinputcolor((prev) => {
        return [...prev, count];
      });
    }
  };
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className={Style.sidebar}>
        <a className="active" href="#add">
          Add Products
        </a>
        <a href="#all">All Products</a>
      </div>
      <div className={Style.content}>
        <div className={Style.add} id="add">
          <div className="container">
            <button onClick={single} className={`btn btn-primary ${Style.butt}`}>
              Add one Product
            </button>
            <button onClick={multi} className={`btn btn-primary ${Style.butt}`}>
              Add multiple Products (Excel File)
            </button>
            <div className={Style.multiple} id="add-product-multiple">
              <form encType="multipart/form-data" onSubmit={handleSubmitExcel}>
                <div className="form-group">
                  <label htmlFor="File">Upload File</label>
                  <input
                    type="file"
                    name="file"
                    ref={Excelfile}
                    className="form-control"
                    id="File"
                    placeholder="File"
                  />
                  <p className={Stylee.error}>{message && message.Excelfile}</p>
                </div>

                <button type="submit" className={Stylee.contsbtn}>
                  {isLoading ? "Loading" : "Add"}
                </button>
              </form>
            </div>
            <div id="add-product" className={Style.one}>
              <div className={Style.inpst}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                      type="text"
                      className={`form-control ${Stylee.m}`}
                      id="name"
                      ref={Name}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "title") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>{message && message.Name}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      className={`form-control ${Stylee.m}`}
                      id="idc"
                      ref={Category}
                      onChange={getCategoryById}
                    >
                      <option>Select Category</option>
                      {Categories.results > 0 &&
                        Categories.data.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "category") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.Category}
                    </p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="productstags">Product Tags</label>
                    <input
                      type="text"
                      className={`form-control ${Stylee.m}`}
                      id="productstags"
                      ref={Productstags}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "tags") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.Productstags}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      className={`form-control ${Stylee.m}`}
                      id="stock"
                      ref={stock}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "quantity") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>{message && message.stock}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="galary">Gallary image</label>
                    <input
                      type="file"
                      className={`form-control ${Stylee.m}`}
                      id="galary"
                      ref={Gallaryimage}
                      multiple
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "images") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.Gallaryimage}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Refundable">Refundable</label>
                    <br />
                    &nbsp;
                    <label htmlFor="Refundable">No</label>
                    <input
                      type="radio"
                      name="Refundable"
                      ref={Refundable}
                      value={false}
                    />
                    &nbsp; &nbsp;
                    <label htmlFor="Refundable">Yes</label>
                    &nbsp;
                    <input
                      type="radio"
                      name="Refundable"
                      checked
                      value={true}
                      ref={Refundable}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "refundable") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.Refundable}
                    </p>
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="Cod">COD</label>
                    <br />
                    <label htmlFor="Cod">No</label>
                    &nbsp;
                    <input
                      type="radio"
                      name="COD"
                      id="Cod"
                      ref={Cod}
                      value={false}
                    />
                    <label htmlFor="Cod">Yes</label>
                    &nbsp;
                    <input
                      type="radio"
                      name="COD"
                      id="Cod"
                      ref={Cod}
                      value={true}
                      checked
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "COD") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>{message && message.Cod}</p>
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="Variation">Variation</label>
                    <input
                      type="text"
                      name="variation"
                      className={`form-control ${Stylee.m}`}
                      id="Variation"
                      ref={ProductVariation}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "variation") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.ProductVariation}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="MultipleTax">MultipleTax</label>
                    <input
                      type="checkbox"
                      name="MultipleTax"
                      id="MultipleTax"
                      ref={MultipleTax}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Labour">Labour Cost</label>
                    <input
                      type="number"
                      name="Labour"
                      className={`form-control ${Stylee.m}`}
                      id="Labour"
                      ref={LabourCost}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "price") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.LabourCost}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Weight">Weight</label>
                    <input
                      type="text"
                      name="Weight"
                      className={`form-control ${Stylee.m}`}
                      id="Weight"
                      ref={Weight}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "weight") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>{message && message.Weight}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Personalized">Personalized</label>
                    <br />
                    <label htmlFor="Personalized">No</label>
                    &nbsp;
                    <input
                      type="radio"
                      name="Personalized"
                      id="Personalized"
                      ref={PersonlizedName}
                      value={false}
                    />
                    &nbsp; &nbsp;
                    <label htmlFor="Personalized">Yes</label>
                    &nbsp;
                    <input
                      type="radio"
                      checked
                      name="Personalized"
                      id="Personalized"
                      ref={PersonlizedName}
                      value={true}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "personalized") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.PersonlizedName}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="PriceAfterDiscount">
                      Price After Discount
                    </label>
                    <input
                      type="number"
                      name="PriceAfterDiscount"
                      className={`form-control ${Stylee.m}`}
                      id="PriceAfterDiscount"
                      ref={priceAfterDiscount}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "priceAfterDiscount") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.priceAfterDiscount}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Colors">Colors</label>
                    <input
                      type="text"
                      name="colors"
                      className={`form-control ${Stylee.m}`}
                      ref={Colors}
                    />
                    {createinputcolor &&
                      createinputcolor.map((input) => (
                        <div key={input}>
                          <input
                            type="text"
                            name="colors"
                            className={`form-control ${Stylee.m}`}
                            ref={Colors}
                          />
                        </div>
                      ))}
                    <button
                      type="button"
                      onClick={addcolor}
                      className="btn btn-primary"
                    >
                      Add Another Color
                    </button>
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "colors") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>{message && message.Colors}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Sizes">Sizes</label>
                    <input
                      type="text"
                      name="sizes"
                      className={`form-control ${Stylee.m}`}
                      ref={Sizes}
                    />

                    {createinputsize &&
                      createinputsize.map((item, index) => {
                        return (
                          <input
                            type="text"
                            name="sizes"
                            className={`form-control ${Stylee.m}`}
                            ref={Sizes}
                            key={index}
                          />
                        );
                      })}
                    <button
                      type="button"
                      onClick={addsize}
                      className="btn btn-primary"
                    >
                      Add Another Size
                    </button>
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "sizes") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>{message && message.Sizes}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Description">Description</label>
                    <textarea
                      name="Description"
                      className={`form-control ${Stylee.m}`}
                      id="Description"
                      ref={ProductDescription}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "description") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.ProductDescription}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Subcategories">Subcategories</label>
                    <select
                      className={`form-control ${Stylee.m}`}
                      ref={Subcategories}
                      name="subcategories"
                    >
                      <option>Select Subcategories</option>
                      {Subcategory.results > 0
                        ? Subcategory.data.map((subcategory) => (
                            <option
                              key={subcategory._id}
                              value={subcategory._id}
                            >
                              {subcategory.name}
                            </option>
                          ))
                        : "No subcategories to show"}
                    </select>
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "subcategories") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.Subcategories}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Brand">Brand</label>
                    <select className={`form-control ${Stylee.m}`} ref={Brand}>
                      <option>Select Brand</option>
                      {brands.results > 0
                        ? brands.data.map((brand) => (
                            <option key={brand.id} value={brand._id}>
                              {brand.name}
                            </option>
                          ))
                        : "No brands to show"}
                    </select>
                    <p className={Stylee.error}>{message && message.Brand}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="imgcover">Image Cover</label>
                    <input
                      type="file"
                      name="imgcover"
                      className={`form-control ${Stylee.m}`}
                      id="imgcover"
                      ref={imgCover}
                    />
                    {errorr &&
                      errorr.map((err) => {
                        if (err.param === "imageCover") {
                          return <p className={Stylee.error}>{err.msg}</p>;
                        }
                      })}
                    <p className={Stylee.error}>
                      {message && message.imgCover}
                    </p>
                  </div>
                  <button type="submit" className={Stylee.contsbtn}>
                    {isLoading ? "Loading" : "Add"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.all} id="all">
          <h1>All products</h1>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Labour Cost</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>{Productlist}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Productdash;
