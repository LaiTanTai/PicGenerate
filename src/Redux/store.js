import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./slice/Loginslice";

export const store = configureStore({
    reducer:{
        login:Loginslice
    }
})