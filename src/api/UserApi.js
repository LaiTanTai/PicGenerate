import axios from "axios"

export const GetAllUser = async()=>{
    const data = await axios.get("http://localhost:8080/generate/Explore",{
        headers:{
            'Authorization':`Bearer ${JSON.parse(localStorage.getItem("user")).jwt}` 
        }
    })
    return data.data.data
}