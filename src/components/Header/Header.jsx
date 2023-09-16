import React from 'react'
import styles from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { Open } from '../../Redux/slice/Loginslice'
function Header() {
    const dispatch = useDispatch()
  return (
    <div style={{position:'fixed',width:"100%",zIndex:"10"}}>
        <div className={styles.navbar}>
            <img src='./img/Untitled.png' alt='PicCRAFT'/>
            <button className={styles.SignUp} onClick={()=>dispatch(Open())}>Sign Up/Log In</button>
        </div>
    </div>
  )
}

export default Header