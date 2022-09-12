import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subCategories } from "../redusers/categories";
import { updateProducts } from "../redusers/productslice";
import { getBrands } from "../redusers/brand";
// import Loading from "../loading";
const Update = () => {
  const { isLoading, Productinfo } = useSelector((state) => state.Products);
  const [selectedID, setSelectedID] = useState();

  const { Categories, Subcategory } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.Brand);
  console.log(Productinfo);
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
  const Sizes = useRef([]);
  const Colors = useRef([]);
  const Subcategories = useRef();
  const imgCover = useRef();
  const Brand = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    Name.current.value = Productinfo.title;
    Category.current.value = Productinfo.category;
    Productstags.current.value = Productinfo.tags;
    stock.current.value = Productinfo.quantity;
    Gallaryimage.current.file = Productinfo.images;
    Refundable.current.value = Productinfo.refundable;
    Cod.current.value = Productinfo.COD;
    ProductVariation.current.value = Productinfo.variation;
    LabourCost.current.value = Productinfo.price;
    PersonlizedName.current.value = Productinfo.personlized;
    Weight.current.value = Productinfo.weight;
    MultipleTax.current.value = Productinfo.multiple_tax;
    priceAfterDiscount.current.value = Productinfo.priceAfterDiscount;
    ProductDescription.current.value = Productinfo.description;
    Sizes.current.value = Productinfo.sizes;
    Colors.current.value = Productinfo.colors;
    Subcategories.current.value = Productinfo.subcategories;
    imgCover.current.file = Productinfo.imageCover;
    Brand.current.value = Productinfo.brand;
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
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
      formData.append("colors", element.value);
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
    dispatch(updateProducts(formData));
    //   Name.current.value="";
    //     Category.current.value="";
    //     Productstags.current.value="";
    //     stock.current.value="";
    //     Gallaryimage.current.value="";
    //     Refundable.current.value="";
    //     Cod.current.value="";
    //     ProductVariation.current.value="";
    //     LabourCost.current.value="";
    //     PersonlizedName.current.value="";
    //     Weight.current.value="";
    //     MultipleTax.current.value="";
    //     priceAfterDiscount.current.value="";
    //     ProductDescription.current.value="";
    //     Sizes.current.value="";
    //     Colors.current.value="";
    //     Subcategories.current.value="";
    //     Brand.current.value="";
    //     imgCover.current.value="";
  };
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

  useEffect(() => {
    dispatch(subCategories(selectedID));
  }, [selectedID]);
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  return (
    <>
      {/* {isLoading ? <Loading/> :null} */}
      <div
      //    className={Style.content}
      >
        <h2 className="text-center">Update Products</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              require="true"
           
              ref={Name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>

            <select
              className="form-control"
              id="idc"
              ref={Category}
              onChange={getCategoryById}
            >
              <option>Select Category</option>
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
            <label htmlFor="Tags">Product Tags</label>
            <input
              type="text"
              className="form-control"
              id="Tags"
              require="true"
         
              ref={Productstags}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              require="true"
          
              ref={stock}
            />
          </div>
          <div className="form-group">
            <label htmlFor="galary">Gallary image</label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="form-control"
              id="galary"
              require="true"
              
              ref={Gallaryimage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Refundable">Refundable</label>
            <label htmlFor="Refundable">No</label>
            <input
              type="radio"
              name="Refundable"
              id="Refundable"
              require="true"
              
              ref={Refundable}
            />
            <label htmlFor="Refundable">Yes</label>
            <input
              type="radio"
              name="Refundable"
              id="Refundable"
              require="true" 
              
              ref={Refundable}
            />
          </div>
          <div className="form-group">
            <label htmlFor="MultipleTax">Multiple Tax</label>
            <input
              type="checkbox"
              name="MultipleTax"
              id="MultipleTax"
              ref={MultipleTax}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Cod">COD</label>
            <input type="radio" name="COD" id="Cod" ref={Cod} />
            <label htmlFor="Cod">No</label>
            <input type="radio" name="COD" id="Cod" ref={Cod} />
            <label htmlFor="Cod">Yes</label>
          </div>
          <div className="form-group">
            <label htmlFor="Variation">Variation</label>
            <input
              type="text"
              name="variation"
              className="form-control"
              id="Variation"
              ref={ProductVariation}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Labour">Labour Cost</label>
            <input
              type="number"
              name="Labour"
              className="form-control"
              id="Labour"
              ref={LabourCost}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Weight">Weight</label>
            <input
              type="text"
              name="Weight"
              className="form-control"
              id="Weight"
              ref={Weight}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Personalized">Personalized</label>
            <input
              type="radio"
              name="Personalized"
              id="Personalized"
              ref={PersonlizedName}
            />
            <label htmlFor="Personalized">No</label>
            <input
              type="radio"
              name="Personalized"
              id="Personalized"
              ref={PersonlizedName}
            />
            <label htmlFor="Personalized">Yes</label>
          </div>
          <div className="form-group">
            <label htmlFor="PriceAfterDiscount">Price After Discount</label>
            <input
              type="number"
              name="PriceAfterDiscount"
              className="form-control"
              id="PriceAfterDiscount"
              ref={priceAfterDiscount}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Colors">Colors</label>
            <input
              type="text"
              name="colors"
              className="form-control"
              ref={Colors}
            />
            <input
              type="text"
              name="colors"
              className="form-control"
              ref={Colors}
            />
            <input
              type="text"
              name="colors"
              className="form-control"
              ref={Colors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Sizes">Sizes</label>
            <input
              type="text"
              name="sizes"
              className="form-control"
              ref={Sizes}
            />
            <input
              type="text"
              name="sizes"
              className="form-control"
              ref={Sizes}
            />
            <input
              type="text"
              name="sizes"
              className="form-control"
              ref={Sizes}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              name="Description"
              className="form-control"
              id="Description"
              ref={ProductDescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Subcategories">Subcategories</label>
            <select
              className="form-control"
              ref={Subcategories}
              name="subcategories"
            >
              <option>Select Subcategories</option>
              {Subcategory.results > 0
                ? Subcategory.data.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory._id}>
                      {subcategory.name}
                    </option>
                  ))
                : "No subcategories to show"}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Brand">Brand</label>
            <select className="form-control" ref={Brand}>
              <option>Select Brand</option>
              {brands.results > 0
                ? brands.data.map((brand) => (
                    <option key={brand.id} value={brand._id}>
                      {brand.name}
                    </option>
                  ))
                : "No brands to show"}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imgcover">Image Cover</label>
            <input
              type="file"
              name="imgcover"
              className="form-control"
              id="imgcover"
              ref={imgCover}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {isLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
