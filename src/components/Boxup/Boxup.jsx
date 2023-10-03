import React, { useState } from 'react'
import styles from './Boxup.module.scss'
import { useDispatch } from 'react-redux'
import { Open } from '../../Redux/slice/Loginslice'
import { useNavigate } from 'react-router-dom'
import { GetUser, signin} from '../../Redux/slice/Userslice'
function Boxup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [IslackUsername,setIsLackUsername] = useState(false) 
  const [IsLackPassword,setIsLackPassword] = useState(false)
  const [IsNullUser,setIsNullUser] = useState(false)
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handlechangeUsername = (event)=>{
    setUsername(event.target.value)
    setIsLackUsername(false)
  }
  const handleChangePassword = (event)=>{
    setPassword(event.target.value)
    setIsLackPassword(false)
  }
  const handleSubmit = async()=>{
    if(!username){
      setIsLackUsername(true)
    }
    if(!password){
      setIsLackPassword(true)
    }
    if(username !== '' && password !== ''){
      const User = {
        username : username,
        password : password,
      }
      const data = await GetUser(User)
      console.log(data)
      if(data){
        dispatch(signin(data))
        navigate('/generate')
      }else{
        setIsNullUser(true)
      }
    }
  }
  return (
    <div className={styles.Boxup}>
      <div className={styles.BoxupIn}>
        <img className={styles.Boxup_image} src='./img/login.jpg' alt='login'/>
        <button className={styles.Boxup_button} onClick={()=>dispatch(Open())}>X</button>
        <div className={styles.Boxup_text}>
          <h1 className={styles.Boxup_text_h1}>
            Sign in to start creating
          </h1>
          <p className={styles.Boxup_text_p}>Watch your prompts turn into beautiful designs, artworks,
images, and videos. Gencraft brings your ideas to life.</p>
        <label style={{fontWeight:'800'}}>
          USERNAME<br/>
          <input type='text' onChange={handlechangeUsername} className={styles.Boxup_input} placeholder='Username'/><br/>
          {IslackUsername ? <p style={{color:'red',fontWeight:'600',margin:'0px 0px 0px 0px',fontSize:'10px'}}>username should'nt be empty</p>:''}
        </label>  
        <label style={{fontWeight:'800'}}>
        PASSWORD<br/>
          <input type='password' onChange={handleChangePassword} className={styles.Boxup_input} placeholder='Password'/>
        </label><br/>
        {IsLackPassword ? <p style={{color:'red',fontWeight:'600',margin:'0px 0px 0px 0px',fontSize:'10px'}}>password should'nt be empty</p>:''}
        {IsNullUser ? <p style={{color:'red',fontWeight:'600',margin:'0px 0px 0px 0px',fontSize:'15px'}}>Could'nt find any user</p>:''}
          <button onClick={handleSubmit} className={styles.Boxup_buttonSignin}>Sign In</button><br/>
          <p style={{marginTop:'0px',marginBottom:'0px'}}>or</p>
          <button onClick={()=>navigate('/Register')} className={styles.Boxup_buttonSignin}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Boxup