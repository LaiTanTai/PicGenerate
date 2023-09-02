import React from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
  return (
    <div style={{position:'fixed',width:"100%",zIndex:"1"}}>
        <div className={styles.navbar}>
            <img src='./img/Untitled.png' alt='PicCRAFT'/>
            <button className={styles.Explore} onClick={()=>(navigate('/explore'))}><i class="fa-solid fa-magnifying-glass fa-bounce"></i> Explore</button>
            <button className={styles.SignUp}>Sign Up/Log In</button>
        </div>
    </div>
  )
}

export default Header