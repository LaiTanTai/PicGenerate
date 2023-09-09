import React, { useState } from 'react'
import styles from './Register.module.scss'
import { PostUser } from '../../api/MockAPI'
import { useNavigate } from 'react-router-dom'
function Register() {
  const navigate = useNavigate()
  const [valueButton,setValueButton] = useState(false)
  const [Username,setUsername] = useState('')
  const [Password,setPassword] = useState('')
  const handleChangeUser = (event)=>{
    setUsername(event.target.value)
  }
  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }
  const handleSubmit = async ()=>{
    setValueButton(true)
    const user = {
      username:Username,
      password:Password,
      images:[],
      avatar:"",
    }
    await PostUser(user)
    navigate('/')
  }
  return (
    <div className={styles.Register}>
      <img className={styles.Register_image} src='./img/img_hero_section_3_2.jpg'/>
      <div className={styles.Register_Box}>
        <div className={styles.Register_BoxInside}>
          <h1>Register</h1>
          <hr/>
          <div style={{textAlign:'start',marginLeft:'20px'}}>
            <p style={{fontWeight:'700'}}>Username</p>
            <input onChange={handleChangeUser} className={styles.Register_input} placeholder='Username'/>
            <p style={{fontWeight:'700'}}>Password</p>
            <input onChange={handlePassword} className={styles.Register_input} placeholder='Password'/>
          </div>
          <button onClick={handleSubmit} disabled={valueButton} style={{width:'90%',height:'50px',marginTop:'30px',borderRadius:'10px',border:'0',backgroundColor:'#6c79f1',fontWeight:'700'}}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register