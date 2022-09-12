import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getBrands = createAsyncThunk(
  "brand/getBrands",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/brands",{
          method: "GET",
          headers: {
     
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }}
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const insertBrand = createAsyncThunk(
  "brand/insertBrand",
  async (brand, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/brands",
        {
          method: "POST",
          body: brand,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async (brand, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(brand);
    try {
   const response = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/brands/${brand.id}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") || "Bearer ",
          },
          body: brand.data,
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/brands/${item._id}`,

        {
          method: "DELETE",
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      // const data = await response.json();
      console.log(item);
      return item;
    } catch (error) {
      console.log(error, "error");
      return rejectWithValue(error.message);
    }
  }
);
export const getBrand = createAsyncThunk(
  "brand/getBrand",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
     let res= await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/brands/${item}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const BrandSlice = createSlice({
  name: "brand",
  initialState: {
    brands: [],
    Brandinfo: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getBrands.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBrands.fulfilled]: (state, action) => {
      state.brands = action.payload;
      state.isLoading = false;
    },
    [getBrands.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [insertBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertBrand.fulfilled]: (state, action) => {
      state.brands = action.payload;
      state.isLoading = false;
    },
    [insertBrand.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [updateBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateBrand.fulfilled]: (state, action) => {
      state.brands = action.payload;
      // .data.map((brand) => {
      //   if (brand._id === action.payload._id) {
      //     return action.payload;
      //   }
      //   return brand;
      // });
      state.isLoading = false;
    },
    [updateBrand.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [deleteBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBrand.fulfilled]: (state, action) => {
      state.brands.data = state.brands.data.filter(
        (item) => item.id !== action.payload._id
      );
      state.isLoading = false;
    },
    [deleteBrand.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [getBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBrand.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.brands = action.payload;
    },
    [getBrand.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});
export default BrandSlice.reducer;
