import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/Cartslice'
import modalReducer from './features/modal/modalSlice'
export const storee = configureStore({
reducer: {
    cart:cartReducer,
    modal:modalReducer
},
});
