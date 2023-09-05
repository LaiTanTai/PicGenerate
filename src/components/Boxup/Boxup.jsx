import React, { useState } from 'react'
import styles from './Boxup.module.scss'
import { useDispatch } from 'react-redux'
import { Open } from '../../Redux/slice/Loginslice'
import { useNavigate } from 'react-router-dom'
import { GetUser } from '../../Redux/slice/Userslice'
function Boxup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handlechangeUsername = (event)=>{
    setUsername(event.target.value)
  }
  const handleChangePassword = (event)=>{
    setPassword(event.target.value)
  }
  const handleSubmit = async()=>{
    const user = {
      username : username,
      password : password,
    }
    await dispatch(GetUser(user))
    dispatch(Open())
    navigate('/generate')
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
        </label>  
        <label style={{fontWeight:'800'}}>
        PASSWORD<br/>
          <input type='password' onChange={handleChangePassword} className={styles.Boxup_input} placeholder='Password'/>
        </label><br/>
        <button onClick={handleSubmit} className={styles.Boxup_buttonSignin}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Boxup