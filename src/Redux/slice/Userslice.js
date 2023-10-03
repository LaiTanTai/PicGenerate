import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetUser = async (user)=>{
    try{
        const data = await axios.post('http://localhost:8080/login',user)
        console.log(data.data.data.urls)
        return data.data.data
    }catch(err){
        console.log(err)
    }
}
const UserSlice = createSlice({
    name:'User',
    initialState:{
        user : JSON.parse(localStorage.getItem('user')) || null
    },
    reducers:{
        signin : (state,action)=>{
            console.log(action)
            localStorage.setItem('user',JSON.stringify(action.payload))
            state.user = action.payload
        }
    },
})
export const {signin} = UserSlice.actions
export default UserSlice.reducer