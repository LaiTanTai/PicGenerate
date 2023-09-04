import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetUser = createAsyncThunk("getuser",async(user)=>{
    try{
        const data = await axios.get('https://64f1fb2d0e1e60602d2484c0.mockapi.io/PicGenerate')
        localStorage.setItem('user',data.data.find((value)=>value.username === user.username && value.password === user.password))
        return data.data
    }catch(err){
        console.log(err)
    }
})
const UserSlice = createSlice({
    name:'User',
    initialState:{
        user : localStorage.getItem('user') || null
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(GetUser.fulfilled,(state,action)=>{
            return {...state,user:action.payload}
        })
    }
})
export default UserSlice.reducer