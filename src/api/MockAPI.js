import axios from "axios"

export const getAllImage = async ()=>{
    const data = await axios.get('https://64f1fb2d0e1e60602d2484c0.mockapi.io/PicGenerate/')
    return data
}
export const PostUser = async (user)=>{
    await axios.post('https://64f1fb2d0e1e60602d2484c0.mockapi.io/PicGenerate/',user)
}