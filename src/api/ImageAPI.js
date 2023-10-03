import axios from "axios"
import { signin } from "../Redux/slice/Userslice"
import { GetUser } from "../Redux/slice/Userslice"
export const UpdateImage = async(link,user,dispatch)=>{
    console.log(link)
    const response = await axios({
        method:'POST',
        url:"http://localhost:8080/image/upload",
        params:{
            imageUrl:link
        },
        headers:{
            'Authorization':`Bearer ${JSON.parse(localStorage.getItem("user")).jwt}` 
        }
    })
    const data = await axios.get('http://localhost:8080/image/getAll',{
        headers:{
            'Authorization':`Bearer ${JSON.parse(localStorage.getItem("user")).jwt}` 
        }
    })
    console.log(data.data.data)
    const newdata = {
        username:user.username,
        jwt:user.jwt,
        urls:data.data.data
    }
    dispatch(signin(newdata))
}
export const getAllImage = async ()=>{
    let response = await axios.get(`http://localhost:8080/image`,{
        headers:{
            'Authorization':`Bearer ${JSON.parse(localStorage.getItem("user")).jwt}` 
        }
    })
    return response.data.data
    // return response.data.data
}
export const uploadImage = async (url)=>{
    const data = await axios.post(`http://localhost:8080/image/upload`,url,{  
        headers:{
            'Authorization':`Bearer ${JSON.parse(localStorage.getItem("user")).jwt}` 
        }
    })
}