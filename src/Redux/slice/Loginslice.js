import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
    name:'login',
    initialState:{
        isOpen:false,
    },
    reducers:{
        Open:(state)=>{
            state.isOpen = !state.isOpen
        }
    }
})
export const {Open} =loginSlice.actions 
export default loginSlice.reducer