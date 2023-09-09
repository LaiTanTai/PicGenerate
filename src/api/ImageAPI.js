import axios from "axios"
import { signin } from "../Redux/slice/Userslice"
import { GetUser } from "../Redux/slice/Userslice"
export const UpdateImage = async(link,user,dispatch)=>{
    console.log(link)
    const newData = {
        username:user.username,
        images:[...user.images,link],
        avatar:user.avatar,
        id:user.id
    }
    const response = await axios.put(`https://64f1fb2d0e1e60602d2484c0.mockapi.io/PicGenerate/${user.id}`,newData)
    console.log(response)
    const User = {
        username : user.username,
        password : user.password
    }
    const data = await GetUser(User)
    dispatch(signin(data))
}