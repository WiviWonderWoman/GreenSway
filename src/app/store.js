import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user-slice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
})