import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetUser = async (user)=>{
    try{
        const data = await axios.get('https://64f1fb2d0e1e60602d2484c0.mockapi.io/PicGenerate')
        const FindUser = data.data.find((value)=>value.username === user.username && value.password === user.password)
        return FindUser
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