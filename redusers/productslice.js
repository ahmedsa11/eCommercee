import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk(
  "Products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/products"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const insertProducts = createAsyncThunk(
  "Products/insertProducts",
  async (dataProduct, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/products",
        {
          method: "POST",
          body: dataProduct,
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") || "Bearer ",
          },
        }
      );
      const data = await res.json();
      if (data.status === "success") {
        console.log(data);
        
        return data;
      } else {

        console.log(data);
        return rejectWithValue(data.message);
      }
  }
);
export const insertExcelProducts = createAsyncThunk(
  "Products/insertExcelProducts",
  async (dataProduct, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
      const res = await fetch(
        "https://552b-41-236-239-6.eu.ngrok.io/api/v1/products/storeExcelFile",
        {
          method: "POST",
          body: dataProduct,
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") || "Bearer ",
          },
        }
      );
      const data = await res.json();
      if (data.status === "success") {
        console.log(data);
        return data;
      }
      else {
        console.log(data);
        return rejectWithValue(data.message);
      }
  }
);

    
export const deleteProducts = createAsyncThunk(
  "Products/deleteProduct",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/products/${item._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProductbyid = createAsyncThunk(
  "Products/getProduct",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/products/${item}`,
        {
          method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }
      );

      const data = await res.json();
      console.log(data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateProducts = createAsyncThunk(
  "Products/updateProducts",
  async (dataProduct, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/products/${dataProduct.id}`,
        {
          method: "PUT",
          body: dataProduct.data,
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") || "Bearer ",
          },
        }
      ); 
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addProducttocart = createAsyncThunk(
  "Products/addProducttocart",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3009/Products/${item.id}`, {
        method: "GET",
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const Products = createSlice({
  name: "Products",
  initialState: {
    Products: [],
    isLoading: false,
    error: [],
    // Productinfo: [],
    // Productcart: [],
    // Productupdate: [],
  },
  // reducers:{
  //     setProducts:(state,action)=>{
  //         state.Productinfo=state.Products.push(action.payload);
  //     }
  // },
  extraReducers: {
    //getProducts
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //insertProducts
    [insertProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertProducts.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.Products = state.Products.data.push(action.payload);
      state.isLoading = false;
    },
    [insertProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //deleteProducts
    [deleteProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteProducts.fulfilled]: (state, action) => {
      state.Products.data = state.Products.data.filter(
        (item) => item.id !== action.payload._id
      );
      state.isLoading = false;
    },
    [deleteProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // getProduct
    [getProductbyid.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductbyid.fulfilled]: (state, action) => {
      state.Products = action.payload;
      state.isLoading = false;
    },
    [getProductbyid.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //updateProducts
    [updateProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateProducts.fulfilled]: (state, action) => {
      state.Products = action.payload;
      state.isLoading = false;
    },
    [updateProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //add excel
    [insertExcelProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    }
    ,
    [insertExcelProducts.fulfilled]: (state, action) => {
      state.Products = action.payload;
      state.isLoading = false;
    }
    ,
    [insertExcelProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    
    // //addProducttocart
    // [addProducttocart.fulfilled]:(state,action)=>{
    //     state.Productcart=state.Productcart.filter(Product=>Product.id!==action.payload.id)
    //     state.Productcart.push(action.payload)
    // },
    // [addProducttocart.rejected]:(state,action)=>{
    //     state.isLoading=false;
    //     state.error=action.payload;
    // }
  },
});
export default Products.reducer;
