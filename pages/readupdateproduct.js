import React, { useState, useEffect } from "react";
import { getProductbyid, updateProducts } from "../redusers/productslice";
import Image from "next/image";
import Style from "../styles/update.module.css";
import { useSelector, useDispatch } from "react-redux";
import { subCategories, getCategory } from "../redusers/categories";
import { useRouter } from "next/router";
import Loading from "../components/loading";
const Readp = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const { Products, isLoading } = useSelector((state) => state.Products);
  console.log(Products);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedID, setSelectedID] = useState();
  const { Categories, Subcategory } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.Brand);
  const [ProductName, setProductName] = useState();
  const [ProductPrice, setProductPrice] = useState();
  const [ProductDescription, setProductDescription] = useState();
  const [ProductBrand, setProductBrand] = useState();
  const [ProductCategory, setProductCategory] = useState({});
  const [ProductSubcategory, setProductSubcategory] = useState([]);
  const [ProductColor, setProductColor] = useState([]);
  const [ProductSize, setProductSize] = useState([]);
  const [ProductQuantity, setProductQuantity] = useState();
  const [ProductPriceAfterDiscount, setProductPriceAfterDiscount] = useState();
  const [ProductPersonalized, setProductPersonalized] = useState();
  const [ProductWeight, setProductWeight] = useState();
  const [ProductVariation, setProductVariation] = useState();
  const [ProductRefundable, setProductRefundable] = useState();
  const [ProductCod, setProductCod] = useState();
  const [ProductMultipleTax, setProductMultipleTax] = useState();
  const [ProductTags, setProductTags] = useState();
  const [galary, setgalary] = useState(Products.images);
  const [cover, setcover] = useState(Products.imageCover);
  console.log(ProductName)
  console.log(ProductColor);
  console.log(ProductSize);
  console.log(route);
  useEffect(() => {
    if (route.query.product_id) {
      console.log(ProductCategory);
      console.log(route);
      dispatch(getProductbyid(route.query.product_id));
    }
  }, [route]);
  useEffect(() => {
    setProductName(Products.title);
    setProductPrice(Products.price);
    setProductDescription(Products.description);
    setProductBrand(Products.brand);
    setProductCategory(Products.category);
    setProductSubcategory(Products.subcategories);
    setProductBrand(Products.brand);
    setProductColor(Products.colors);
    setProductSize(Products.sizes);
    setProductQuantity(Products.quantity);
    setProductPriceAfterDiscount(Products.priceAfterDiscount);
    setProductPersonalized(Products.personalized);
    setProductWeight(Products.weight);
    setProductVariation(Products.variation);
    setProductRefundable(Products.refundable);
    setProductCod(Products.COD);
    setProductMultipleTax(Products.multiple_tax);
    setProductTags(Products.tags);
    setgalary(Products.images);
    setcover(Products.imageCover);
    dispatch(getCategory());
  }, [Products]);
  useEffect(() => {
    dispatch(subCategories(selectedID));
  }, [selectedID]);

  const editbutton = (e) => {
    const editProductName = document.getElementById("editProductName");
    const editProductQuantity = document.getElementById("editProductQuantity");
    const editProductPrice = document.getElementById("editProductPrice");
    const editProductDescription = document.getElementById(
      "editProductDescription"
    );
    const editProductImage = document.getElementById("editProductImage");
    const editProductCategory = document.getElementById("editProductCategory");
    const editProductSubCategory = document.getElementById(
      "editProductSubCategory"
    );
    const editProductBrand = document.getElementById("editProductBrand");
    const editProductColor = document.querySelectorAll(".edcolors");
    const editProductSize = document.querySelectorAll(".edsizes");
    const editimagecover = document.getElementById("editimagecover");
    const editpriceAfterDiscount = document.getElementById(
      "editpriceAfterDiscount"
    );
    const editweight = document.getElementById("editweight");
    const editpersonalized = document.getElementById("editpersonalized");
    const editvariation = document.getElementById("editvariation");
    const editrefundable = document.getElementById("editrefundable");
    const editCOD = document.getElementById("editCOD");
    const editmultiple_tax = document.getElementById("editmultiple_tax");
    const edittags = document.getElementById("edittags");
    const cancel = document.getElementById("cancel");
    const inputsetting = document.getElementsByClassName("inputsetting");
    editProductName.onclick = () => {
      document.getElementById("inputProductName").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductName").style.border =
        "1px solid black";
    };
    editProductQuantity.onclick = () => {
      document
        .getElementById("inputProductQuantity")
        .removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductQuantity").style.border =
        "1px solid black";
    };
    editProductPrice.onclick = () => {
      document.getElementById("inputProductPrice").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductPrice").style.border =
        "1px solid black";
    };
    editProductImage.onclick = () => {
      document.getElementById("inputProductImage").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductImage").style.border =
        "1px solid black";
    };
    editProductDescription.onclick = () => {
      document
        .getElementById("inputProductDescription")
        .removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductDescription").style.border =
        "1px solid black";
    };
    editProductCategory.onclick = () => {
      document
        .getElementById("inputProductCategory")
        .removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductCategory").style.border =
        "1px solid black";
    };
    editProductSubCategory.onclick = () => {
      document
        .getElementById("inputProductSubCategory")
        .removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductSubCategory").style.border =
        "1px solid black";
    };
    editProductBrand.onclick = () => {
      document.getElementById("inputProductBrand").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputProductBrand").style.border =
        "1px solid black";
    };
    editProductColor.forEach((e) => {
      e.onclick = () => {
        document.getElementsByName("colors").forEach((e) => {
          e.target.removeAttribute("disabled");
        });
        document.getElementById("saveandcancel").style.display = "block";
      };
    });
    editProductSize.forEach((e) => {
      e.onclick = () => {
        document.getElementsByName("sizes").forEach((e) => {
          e.removeAttribute("disabled");
        });
        document.getElementById("saveandcancel").style.display = "block";
      };
    });
    editimagecover.onclick = () => {
      document.getElementById("inputimagecover").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputimagecover").style.border =
        "1px solid black";
    };
    editpriceAfterDiscount.onclick = () => {
      document
        .getElementById("inputpriceAfterDiscount")
        .removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputpriceAfterDiscount").style.border =
        "1px solid black";
    };
    editweight.onclick = () => {
      document.getElementById("inputweight").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputweight").style.border = "1px solid black";
    };
    editpersonalized.onclick = () => {
      document.querySelectorAll(".inputpersonalized").forEach((e) => {
        e.removeAttribute("disabled");
      }),
      document.getElementById("saveandcancel").style.display = "block";
    };
    editvariation.onclick = () => {
      document.getElementById("inputvariation").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputvariation").style.border =
        "1px solid black";
    };
    editrefundable.onclick = () => {
      document.querySelectorAll(".refu").forEach((e) => {
        e.removeAttribute("disabled");
      }),
      document.getElementById("saveandcancel").style.display = "block";
    };
    editCOD.onclick = () => {
      document.querySelectorAll(".COD").forEach((e) => {
        e.removeAttribute("disabled");
      }),
      document.getElementById("saveandcancel").style.display = "block";
    };
    editmultiple_tax.onclick = () => {
      document.getElementById("inputmultiple_tax").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputmultiple_tax").style.border =
        "1px solid black";
    };
    edittags.onclick = () => {
      document.getElementById("inputtags").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputtags").style.border = "1px solid black";
    };
    cancel.onclick = (e) => {
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputProductName").value = ProductName;
      document.getElementById("inputProductQuantity").value = ProductQuantity;
      document.getElementById("inputProductPrice").value = ProductPrice;
      document.getElementById("inputProductDescription").value =
        ProductDescription;
      document.getElementById("inputProductCategory").value = ProductCategory;
      document.getElementById("inputProductSubCategory").value =
        ProductSubcategory;
      document.getElementById("inputProductBrand").value = ProductBrand;
      // document.getElementById("inputProductColor").value = ProductColor;
      // document.getElementById("inputProductSize").value = ProductSize;
      document.getElementById("inputpriceAfterDiscount").value =
        ProductPriceAfterDiscount;
      document.getElementById("inputweight").value = ProductWeight;
      document.querySelectorAll(".inputpersonalized").value = ProductPersonalized;
      document.getElementById("inputvariation").value = ProductVariation;
      document.querySelectorAll(".refu").value = ProductRefundable;
      document.querySelectorAll(".COD").value = ProductCod;
      document.getElementById("inputmultiple_tax").value = ProductMultipleTax;
      document.getElementById("inputtags").value = ProductTags;
      for (let i = 0; i < inputsetting.length; i++) {
        inputsetting[i].setAttribute("disabled", "disabled");
      }
    };
  };
  const fileUploadgalary = (e) => {
    const file = e.target.files[0];
    setgalary(file);
  };
  const fileUploadcover = (e) => {
    const file = e.target.files[0];
    setcover(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!document.getElementById("inputProductName").disabled) {
      const formData = new FormData();
      formData.append("title", ProductName);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductName")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputProductQuantity").disabled) {
      const formData = new FormData();
      formData.append("quantity", ProductQuantity);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductQuantity")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputProductPrice").disabled) {
      const formData = new FormData();
      formData.append("price", ProductPrice);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductPrice")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputProductDescription").disabled) {
      const formData = new FormData();
      formData.append("description", ProductDescription);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductDescription")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputProductImage").disabled) {
      const formData = new FormData();
      formData.append("images", galary);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductImage")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputProductCategory").disabled) {
      const formData = new FormData();
      formData.append("category", ProductCategory);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductCategory")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputProductSubCategory").disabled) {
      const formData = new FormData();
      formData.append("subcategories", ProductSubcategory);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductSubCategory")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputProductBrand").disabled) {
      const formData = new FormData();
      formData.append("brand", ProductBrand);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputProductBrand")
        .setAttribute("disabled", "disabled");
    }
    document.getElementsByName("colors").forEach((element) => {
      if (!element.disabled) {
        const formData = new FormData();
        formData.append("colors", element.value);
        dispatch(updateProducts({ id: Products._id, data: formData }));
        document.getElementById("saveandcancel").style.display = "none";
        document.getElementsByName("colors").forEach((element) => {
          element.setAttribute("disabled", "disabled");
        });
      }
    });
    document.getElementsByName("sizes").forEach((element) => {
      if (!element.disabled) {
        const formData = new FormData();
        formData.append("sizes", element.value);
        dispatch(updateProducts({ id: Products._id, data: formData }));
        document.getElementById("saveandcancel").style.display = "none";
        document.getElementsByName("sizes").forEach((element) => {
          element.setAttribute("disabled", "disabled");
        });
      }
    });
    if (!document.getElementById("inputimagecover").disabled) {
      const formData = new FormData();
      formData.append("imageCover", cover);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputimagecover")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputpriceAfterDiscount").disabled) {
      const formData = new FormData();
      formData.append("priceAfterDiscount", ProductPriceAfterDiscount);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputpriceAfterDiscount")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputweight").disabled) {
      const formData = new FormData();
      formData.append("weight", ProductWeight);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputweight")
        .setAttribute("disabled", "disabled");
    }
    if (!document.querySelectorAll(".inputpersonalized").disabled) {
      const formData = new FormData();
      formData.append("personalized", ProductPersonalized);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .querySelectorAll(".inputpersonalized").forEach((element) => {
          element.setAttribute("disabled", "disabled"); 
        });
    }
    if (!document.querySelectorAll(".COD").disabled) {
      const formData = new FormData();
      formData.append("COD", ProductCod);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document.querySelectorAll(".COD").forEach((element) => {
        element.setAttribute("disabled", "disabled");
      });
    }
    if (!document.getElementById("inputmultiple_tax").disabled) {
      const formData = new FormData();
      formData.append("multiple_tax", ProductMultipleTax);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputmultiple_tax")
        .setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputtags").disabled) {
      const formData = new FormData();
      formData.append("tags", tags);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputtags").setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputvariation").disabled) {
      const formData = new FormData();
      formData.append("variation", ProductVariation);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .getElementById("inputvariation")
        .setAttribute("disabled", "disabled");
    }
    if (!document.querySelectorAll(".refu").disabled) {
      const formData = new FormData();
      formData.append("refundable", ProductRefundable);
      dispatch(updateProducts({ id: Products._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document
        .querySelectorAll(".refu").forEach((element) => {
          element.setAttribute("disabled", "disabled");
        }
        );
    }
  };
  const getCategoryById = () => {
    if (typeof window !== "undefined") {
      const id = document.getElementById("inputProductCategory").value;
      setSelectedID(id);
      const select = Categories.data.find((cat) => cat.id === id);
      setSelectedCategory((prev) => {
        return { ...prev, ...select };
      });
    } else {
      alert("Try again");
    }
  };
  useEffect(() => {
    dispatch(subCategories(selectedID));
  }, [selectedID]);
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="container">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          //    encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="inputProductName">Product Name</label>
            <div className={Style.inputcout}>
              <i
                id="editProductName"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputProductName"
                type="text"
                name="ProductName"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={(e) => setProductName(e.target.value)}
                value={ProductName}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="editProductCategory">Product Category</label>
            <div className={Style.inputcout}>
              <i
                id="editProductCategory"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
            </div>
            <select
              disabled
              className="form-control inputsetting"
              id="inputProductCategory"
              onChange={getCategoryById}
              value={ProductCategory}
            >
              {Categories.results > 0
                ? Categories.data.map((category) => (
                
                    <option key={category.id} value={category._id}>
                      {category.name}
                    </option>
                    
                  ))
                : "No categories to show"}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputProductSubCategory">Product SubCategory</label>
            <div className={Style.inputcout}>
              <i
                id="editProductSubCategory"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <select
                disabled
                className="form-control inputsetting"
                name="subcategories"
                id="inputProductSubCategory"
                value={ProductSubcategory}
                
              >
                <option defaultValue>
                  {ProductSubcategory ? ProductSubcategory.name : null}
                </option>
                {Subcategory.results > 0
                  ? Subcategory.data.map((subcategory) => (
                      <option key={subcategory.id} value={subcategory._id}>
                        {subcategory.name}
                      </option>
                    ))
                  : "No subcategories to show"}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputProductDescription">Product Description</label>
            <div className={Style.inputcout}>
              <i
                id="editProductDescription"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <textarea
                id="inputProductDescription"
                name="ProductDescription"
                className="form-control inputsetting"
                require="true"
                disabled
                style={{ resize: "none" }}
                onChange={(e) => setProductDescription(e.target.value)}
                value={ProductDescription}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputProductPrice">Labour Cost</label>
            <div className={Style.inputcout}>
              <i
                id="editProductPrice"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputProductPrice"
                type="text"
                name="ProductPrice"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={(e) => setProductPrice(e.target.value)}
                value={ProductPrice}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputweight">Product Weight</label>
            <div className={Style.inputcout}>
              <i
                id="editweight"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputweight"
                type="text"
                name="ProductWeight"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={(e) => setProductWeight(e.target.value)}
                value={ProductWeight}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputProductQuantity">Stock</label>
            <div className={Style.inputcout}>
              <i
                id="editProductQuantity"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputProductQuantity"
                type="number"
                name="ProductQuantity"
                className="form-control inputsetting"
                disabled
                onChange={(e) => setProductQuantity(e.target.value)}
                value={ProductQuantity}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputProductImage">Product Image</label>
            <div className={Style.inputcout}>
              <i
                id="editProductImage"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputProductImage"
                type="file"
                name="ProductImage"
                accept="image/*"
                multiple
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={fileUploadgalary}
              />
              {galary ? (
              galary.map((image, index) => (
                <Image
                  src={image}
                  alt="ad"
                  width="40"
                  height="50"
                  key={index}
                />
              )))
              : null}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputvariation">Variation</label>
            <div className={Style.inputcout}>
              <i
                id="editvariation"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputvariation"
                type="text"
                name="ProductVariation"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={(e) => setProductVariation(e.target.value)}
                value={ProductVariation}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="inputrefundable">Refundable</label>
            <div className={Style.inputcout}>
              <i
                id="editrefundable"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <label htmlFor="Refundable">No</label>
              <input
                className="refu"
                type="radio"
                name="Refundable"
                require="true"
                disabled
                value={ProductRefundable}
                checked={ProductRefundable ? true : false}
              />
              <label htmlFor="Refundable">Yes</label>
              <input
               className="refu"
                type="radio"
                name="Refundable"
                require="true"
                disabled
                value={ProductRefundable}
                checked={ProductRefundable ? true : false}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="inputmultiple_tax">Multiple Tax</label>
            <div className={Style.inputcout}>
              <i
                id="editmultiple_tax"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                type="checkbox"
                name="MultipleTax"
                disabled
                id="inputmultiple_tax"
                onChange={(e) => setProductMultipleTax(e.target.checked)}
                value={ProductMultipleTax}
                checked={ProductMultipleTax ? true : false}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="inputCOD">COD</label>
            <div className={Style.inputcout}>
              <i
                id="editCOD"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                type="radio"
                name="COD"
                disabled
                className="COD"
                value={false}
                checked={ProductCod ? true : false}
              />
              <label htmlFor="Cod">No</label>
              <input
                type="radio"
                name="COD"
                disabled
                className="COD"
                value={true}
                checked={ProductCod ? true : false}
              />
              <label htmlFor="Cod">Yes</label>{" "}
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="Personalized">Personalized</label>
            <div className={Style.inputcout}>
              <i
                id="editpersonalized"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                type="radio"
                name="Personalized"
                className="inputpersonalized"
                value={false}
                disabled
                checked={ProductPersonalized ? true : false}
              />
              <label htmlFor="Personalized">No</label>
              <input
                type="radio"
                name="Personalized"
                className="inputpersonalized"
                value={true}
                disabled
                checked={ProductPersonalized ? true : false}
              />
              <label htmlFor="Personalized">Yes</label>{" "}
            </div>{" "}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="PriceAfterDiscount">Price After Discount</label>
            <div className={Style.inputcout}>
              <i
                id="editpriceAfterDiscount"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputpriceAfterDiscount"
                type="text"
                name="PriceAfterDiscount"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={(e) => setPriceAfterDiscount(e.target.value)}
                value={ProductPriceAfterDiscount}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="colors">Colors</label>

            {ProductColor ? (
              ProductColor.map((color, index) => {
                return (
                  <div className={Style.inputcout} key={index}>
                    <i
                      className={`fas fa-pen edcolors${Style.editbutton}`}
                      onClick={editbutton}
                    ></i>
                    <input
                      id="inputProductColors"
                      type="text"
                      name="colors"
                      className="form-control inputsetting"
                      require="true"
                      disabled
                      onChange={(e) => setProductColor(e.target.value)}
                      value={color}
                    />
                  </div>
                );
              })
            ) : (
              <div>no colors to show</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Sizes">Sizes</label>

            {ProductSize ? (
              ProductSize.map((size, index) => {
                return (
                  <div className={Style.inputcout} key={index}>
                    <i
                      className={`fas fa-pen edsizes${Style.editbutton}`}
                      onClick={editbutton}
                    ></i>
                    <input
                      id="inputProductSizes"
                      type="text"
                      name="sizes"
                      className="form-control inputsetting"
                      require="true"
                      disabled
                      onChange={(e) => setProductSize(e.target.value)}
                      value={size}
                    />
                  </div>
                );
              })
            ) : (
              <div>no sizes to show</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="inputProductBrand">Brand</label>
            <div className={Style.inputcout}>
              <i
                id="editProductBrand"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <select
                className="form-control inputsetting"
                value={ProductBrand}
                disabled
                id="inputProductBrand"
              >
                <option>select brand</option>
                {brands.results > 0
                  ? brands.data.map((brand) => (
                      <option key={brand.id} value={brand._id}>
                        {brand.name}
                      </option>
                    ))
                  : "No brands to show"}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputimagecover">Image Cover</label>

            <div className={Style.inputcout}>
              <i
                id="editimagecover"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                type="file"
                name="imageCover"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={fileUploadcover}
                id="inputimagecover"
              />
              <Image src={cover} alt="imageCover" width="40" height="50" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputtags">Tags</label>
            <div className={Style.inputcout}>
              <i
                id="edittags"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                type="text"
                name="tags"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={(e) => setProductTags(e.target.value)}
                value={ProductTags}
                id="inputtags"
              />
            </div>
          </div>

          <div id="saveandcancel" className={Style.saveandcancel}>
            <button type="button" id="cancel" className={Style.cancel}>
              cancel
            </button>
            <button type="submit" id="save" className={Style.save}>
              save
            </button>
          </div>
        </form>
        <div className={Style.clear}></div>
      </div>
    </>
  );
};
export default Readp;
