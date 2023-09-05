import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./slice/Loginslice";
import Userslice from "./slice/Userslice";

export const store = configureStore({
    reducer:{
        login:Loginslice,
        User:Userslice,
    }
})