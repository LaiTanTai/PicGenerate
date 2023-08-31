import React from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
  return (
    <div className={styles.navbar}>
        <img  src='./img/Untitled.png' alt='PicCRAFT'/>
        <button className={styles.Explore} onClick={()=>(navigate('/explore'))}><i class="fa-solid fa-magnifying-glass fa-bounce"></i> Explore</button>
    </div>
  )
}

export default Header