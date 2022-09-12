import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "fontawesome";
export const signup = createAsyncThunk(
  "users/signup",
  async (dataa, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/auth/signup",
        {
          method: "POST",
          body: JSON.stringify(dataa),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.status === "success") {
        console.log(data, "success");
        return data;
      } else {
        console.log(data);
        console.log(rejectWithValue(data));
        return rejectWithValue(data);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
export const login = createAsyncThunk(
  "users/login",
  async (dataa, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const res = await fetch(
      "https://e-commerce-app-api-v1.herokuapp.com/api/v1/auth/login",
      {
        method: "POST",
        body: JSON.stringify(dataa),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      console.log(data, "success");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data));
      return data;
    } else {
      console.log(data.message);
      return rejectWithValue(data.message);
    }
  }
); 
export const forgetpassword = createAsyncThunk(
  "users/forgetpassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const res = await fetch(
      "https://e-commerce-app-api-v1.herokuapp.com/api/v1/auth/forgotPassword",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",

        },
      }
    );
    const dataa = await res.json();
    if (dataa.status === "success") {
      return dataa.email;
    } else {
      console.log(dataa.message);
      return rejectWithValue(dataa.message);
    }
  }
);
export const resetCode = createAsyncThunk(
  "users/resetCode",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const res = await fetch(
      "https://e-commerce-app-api-v1.herokuapp.com/api/v1/auth/verifyResetCode",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        
        },
      }
    );
    const dataa = await res.json();
    if (dataa.status === "success") {
      
      console.log(data, "success");
        return dataa;
    } else {
      console.log(dataa.message);
      return rejectWithValue(dataa.message);
    }
  }
);
const upDateuser = createAsyncThunk(
  "users/upDateuser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/users/updateMyData",
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
export const resetPssword = createAsyncThunk(
  "users/resetPssword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const res = await fetch(
      "https://e-commerce-app-api-v1.herokuapp.com/api/v1/auth/resetPassword",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const dataa = await res.json();
    if (dataa.status === "success") {
      console.log(dataa, "success");
      return dataa;
    } else {
      console.log(dataa.message);
      return rejectWithValue(dataa.message);
    }
  }
);

export const Updatepassword = createAsyncThunk(
  "users/Updatepassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/users/updateMyPassword",
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json(); 
      console.log(data, "data");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deletUser = createAsyncThunk(
  "users/deletUser",
  async (dataa, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/users/deleteMe",
        {
          method: "DELETE",
          body: JSON.stringify(dataa),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

const Users = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    isError: "",
    users: [],
    verify: false,
    isLogin: false,
    goodpass: false,
    sent: false,
    email: "",
  },
  reducers: {
    setLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: {
    [signup.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      // state.users=state.users.push(action.payload);
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload.erorrs;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.isLogin = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.isError = action.payload;
    },
    [forgetpassword.pending]: (state, action) => {
      state.isLoading = true;
    },
    [forgetpassword.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.email = action.payload;
      state.sent = true;
    },
    [forgetpassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [resetCode.pending]: (state, action) => {
      state.isLoading = true;
    } ,
    [resetCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.verify = true;
    } ,
    [resetCode.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    } ,
    [resetPssword.pending]: (state, action) => {
      state.isLoading = true;
    } ,
    [resetPssword.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.goodpass = true;
    } ,
    [resetPssword.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    } ,

    //Updatepassword
    [Updatepassword.pending]: (state, action) => {
      state.isLoading = true;
    },
    [Updatepassword.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [Updatepassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    //deletUser
    [deletUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deletUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [deletUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    //upDateuser
    [upDateuser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [upDateuser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [upDateuser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});
export const { setLogin } = Users.actions;
export default Users.reducer;
