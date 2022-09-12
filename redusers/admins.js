import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getAdmins = createAsyncThunk(
    "admins/getAdmins",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await fetch(
                "https://e-commerce-app-api-v1.herokuapp.com/api/v1/users",{
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    method: "GET",
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
export const insertAdmin = createAsyncThunk(
    "admins/insertAdmin",
    async (admin, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await fetch(
                "https://e-commerce-app-api-v1.herokuapp.com/api/v1/users",
                {
                    method: "POST",
                    body: admin,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            console.log(response);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const updateAdmin = createAsyncThunk(
    "admins/updateAdmin",
    async (admin, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        console.log(admin);
        try {
            const response = await fetch(
                `https://e-commerce-app-api-v1.herokuapp.com/api/v1/users/${admin.id}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("token") || "Bearer ",
                    },
                    body: admin.data,
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
export const deleteAdmin = createAsyncThunk(
    "admins/deleteAdmin",
    async (admin, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        console.log(admin);
        try {
            await fetch(
                `https://e-commerce-app-api-v1.herokuapp.com/api/v1/users/${admin._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("token") || "Bearer ",
                    },
                }
            );
      
            return admin;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getAdminbyid = createAsyncThunk(
    "admins/getAdminbyid",
    async (admin, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await fetch(
                `https://e-commerce-app-api-v1.herokuapp.com/api/v1/users/${admin}`,{
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token") || "Bearer ",
                }
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

export const admins = createSlice({
    name: "admins",
    initialState: {
        admins: [],
        isLoading: false,
        error: null,
    },
extraReducers: {
    [getAdmins.pending]: (state, action) => {
        state.isLoading = true;
    },
    [getAdmins.fulfilled]: (state, action) => {
        state.admins = action.payload;
        state.isLoading = false;
    }
    ,
    [getAdmins.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    }
    ,
    [insertAdmin.pending]: (state, action) => {
        state.isLoading = true;
    }
    ,
    [insertAdmin.fulfilled]: (state, action) => {
       state.admins= action.payload;
        state.isLoading = false;
    }
    ,
    [insertAdmin.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    }
    ,
    [updateAdmin.pending]: (state, action) => {
        state.isLoading = true;
    }
    ,
    [updateAdmin.fulfilled]: (state, action) => {
        state.admins = state.admins.map((admin) => {
            if (admin.id === action.payload.id) {
                return action.payload;
            }
            return admin;
        });
        state.isLoading = false;
    }
    ,
    [updateAdmin.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    }
    ,
    [deleteAdmin.pending]: (state, action) => {
        state.isLoading = true;
    }
    ,
    [deleteAdmin.fulfilled]: (state, action) => {
        state.admins.data = state.admins.data.filter(
            (admin) => admin.id !== action.payload._id
        );
        state.isLoading = false;
    }
    ,
    [deleteAdmin.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    }

    ,
    [getAdminbyid.pending]: (state, action) => {
        state.isLoading = true;
    }
    ,
    [getAdminbyid.fulfilled]: (state, action) => {
        state.admins = action.payload;
        state.isLoading = false;
    }
    ,
    [getAdminbyid.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    }

    
}   
});
export default admins.reducer;