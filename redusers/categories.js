import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk(
  "category/getcategory",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertCategory = createAsyncThunk(
  "category/insertcategory",
  async (dataCategory, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // var myheaders=new Headers();
    try {
      // const formdata=new FormData();
      // formdata.append('name',dataCategory.name);
      // formdata.append('image',dataCategory.image);
      // formdata.append('priority',dataCategory.priority);
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories",
        {
          method: "POST",
          body: dataCategory,
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") || "Bearer ",
          },
        }
      );
      const data = await res.json();
      if (data.status === 201) {
        console.log(data);
        return data;
      } else {
        console.log(data);
      }
      return data;
    } catch (error) {
      console.log(error, "error");
      return rejectWithValue(error.message);
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "category/deletecategory",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories/${item._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") || "Bearer ",
          },
        }
      );
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateCategory = createAsyncThunk(
  "category/updatecategory",
  async (dataCategory, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories/${dataCategory.id}`,
        {
          method: "PUT",
          body: dataCategory.data,
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
export const subCategories = createAsyncThunk(
  "category/subcategories",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories/${id}/subcategories`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") || "Bearer ",
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategoryById = createAsyncThunk(
  "category/getcategorybyid",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch(
        `https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories/${item}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const CategorySlice = createSlice({
  name: "category",
  initialState: {
    Categories: [],
    error: null,
    isLoading: false,
    Subcategory: [],
    Categoriesinfo: [],
  },
  extraReducers: {
    //getcategory
    [getCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.Categories = action.payload;
      state.isLoading = false;
    },
    [getCategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //insertCategory
    [insertCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertCategory.fulfilled]: (state, action) => {
      state.Categories = action.payload;
      // state.Categories=state.Categories.push(action.payload);
      state.isLoading = false;
    },
    [insertCategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //deleteCategory
    [deleteCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.Categories.data = state.Categories.data.filter(
        (item) => item.id !== action.payload._id
      );

      state.isLoading = false;
    },
    [deleteCategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //updateCategory
    [updateCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateCategory.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.Categories = action.payload;
      state.isLoading = false;
    },
    [updateCategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //subCategories
    [subCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [subCategories.fulfilled]: (state, action) => {
      state.Subcategory = action.payload;
      state.isLoading = false;
    },
    [subCategories.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //getCategoryById
    [getCategoryById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategoryById.fulfilled]: (state, action) => {
      state.Categories = action.payload;
      state.isLoading = false;
    },
    [getCategoryById.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
export default CategorySlice.reducer;
