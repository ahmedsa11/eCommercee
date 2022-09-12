import { configureStore } from "@reduxjs/toolkit";
import Products from "../redusers/productslice";
import CategorySlice from "../redusers/categories";
import Users from "../redusers/users";
import BrandSlice from "../redusers/brand";
import admins from "../redusers/admins";
const store = configureStore({
  reducer: { Products, categories: CategorySlice, Users, Brand: BrandSlice ,admins},
});
export default store;
