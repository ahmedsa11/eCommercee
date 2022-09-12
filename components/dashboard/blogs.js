{/* <div className="container">
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
              <br/>
              <label htmlFor="Refundable">No</label>
              &nbsp;
              <input
                type="radio"
                name="Refundable"
                id="Refundable"
                require="true"
                ref={Refundable}
                value={false}
              />
                    &nbsp;       &nbsp;
              <label htmlFor="Refundable">Yes</label>
              &nbsp;
              <input
                type="radio"
                name="Refundable"
                id="Refundable"
                require="true"
                value={true}
                ref={Refundable}
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="MultipleTax">Multiple Tax</label>
              &nbsp;
              <input
                type="checkbox"
                name="MultipleTax"
                id="MultipleTax"
                ref={MultipleTax}
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="Cod">COD</label>
              <br/>
              <label htmlFor="Cod">No</label>
              &nbsp;
              <input type="radio" name="COD" id="Cod" ref={Cod} value={false} />
              <label htmlFor="Cod">Yes</label>
              &nbsp;
              <input type="radio" name="COD" id="Cod" ref={Cod} value={true} />
          
            </div>
            <br/>
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
              <br/>
              <label htmlFor="Personalized">No</label>
              &nbsp;
              <input
                type="radio"
                name="Personalized"
                id="Personalized"
                ref={PersonlizedName}
                value={false}
              />
                    &nbsp;       &nbsp;
              <label htmlFor="Personalized">Yes</label>
              &nbsp;
              <input
                type="radio"
                name="Personalized"
                id="Personalized"
                ref={PersonlizedName}
                value={true}
              />
   
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
              {createinputcolor&&createinputcolor.map((input) => (
                <div key={input}>
                  <input
                    type="text"
                    name="colors"
                    className="form-control"
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
            </div>
            <div className="form-group">
              <label htmlFor="Sizes">Sizes</label>
              <input
                type="text"
                name="sizes"
                className="form-control"
                ref={Sizes}
              />
              
              {createinputsize &&
                createinputsize.map((item, index) => {
                  return (
                      <input
                      type="text"
                      name="sizes"
                      className="form-control"
                      ref={Sizes}
                      key={index}
                    />
                    // <div key={index}>
                    //   <>{item}</>
                    // </div>
                    
                  );
                })}
              <button
                type="button"
                onClick={addsize}
                className="btn btn-primary"
              >
                Add Another Size
              </button>
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
          </div> */}