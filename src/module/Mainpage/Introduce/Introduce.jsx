import React from 'react'
import styles from './Introduce.module.scss'
import { useNavigate } from 'react-router-dom'
function Introduce() {
    const navigate = useNavigate()
  return (
    <div className={styles.introduce}>
      <div style={{marginTop:"75px"}}>
        <img src='./img/Untitled123.png' alt='introduce'/>
        <h1 className={styles.introduce_text}>The world’s most powerful AI photo and video art generation engine.
What will you create?</h1>
        <button className={styles.introduce_buttonExplore} onClick={()=>navigate('/explore')}><i class="fa-solid fa-magnifying-glass fa-bounce"></i> EXPLORE</button>
        </div>
    </div>
  )
}

export default Introduce