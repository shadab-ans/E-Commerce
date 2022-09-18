import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../all_feature/productSlice";
import recentlyReducer from "../all_feature/recentlySlice";
import fashionReducer from "../all_feature/fashionSlice";
import carouselReducer from "../all_feature/carouselSlice";
import cartReducer from "../all_feature/addCartSlice";
import amountReducer from "../all_feature/totalAmountSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    recently: recentlyReducer,
    fashion: fashionReducer,
    carousel: carouselReducer,
    cart: cartReducer,
    amount: amountReducer
  },
});

export default store;
