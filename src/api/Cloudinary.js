import axios from "axios";
export const CloudinaryUpload = async (url)=>{
  const cloudName = "dj219rk3m"
  const data = new FormData()
  data.append("file", url)
  data.append("upload_preset", "js5lrh6s")
  const result = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, data)
  return result
}
