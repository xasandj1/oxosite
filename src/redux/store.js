import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./reducer/productReducer"

export const store = configureStore({
    reducer: {
        likeReducer
    }
})