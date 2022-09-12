import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getSubcategories = createAsyncThunk(
  "brand/getBrands",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/subcategories"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const insertSubCategory = createAsyncThunk(
  "brand/insertBrand",
  async (SubCategory, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/subcategories",
        {
          method: "POST",
          body: SubCategory,
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
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
export const updateSubCategory = createAsyncThunk(
  "brand/updateBrand",
  async (SubCategory, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/subcategories/${SubCategory.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: SubCategory,
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteSubCategory = createAsyncThunk(
  "brand/deleteBrand",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/subcategories/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSubCategory = createAsyncThunk(
  "brand/getBrand",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/subcategories/${id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const Subcategories = createSlice({
  name: "subcategories",
  initialState: {
    subcategories: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getSubcategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getSubcategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subcategories = action.payload;
    },
    [getSubcategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [insertSubCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertSubCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subcategories = action.payload;
    },
    [insertSubCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateSubCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateSubCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subcategories = state.subcategories.map((subcategory) => {
        if (subcategory.id === action.payload.id) {
          return action.payload;
        }
        return subcategory;
      });
    },
    [updateSubCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteSubCategory.pending]:(state,action)=>{
      state.isLoading=true
    },
    [deleteSubCategory.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.subcategories=state.subcategories.filter(subcategory=>subcategory.id!==action.payload)
    }
    ,
    [deleteSubCategory.rejected]:(state,action)=>{
      state.isLoading=false
      state.error=action.payload
    }
    ,
    [getSubCategory.pending]:(state,action)=>{
      state.isLoading=true
    }
    ,
    [getSubCategory.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.subcategories=action.payload
    }
    ,
    [getSubCategory.rejected]:(state,action)=>{
      state.isLoading=false
      state.error=action.payload
    }
    

  },
});
