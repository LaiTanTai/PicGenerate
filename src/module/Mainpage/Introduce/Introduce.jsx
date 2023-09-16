import React from 'react'
import styles from './Introduce.module.scss'
import { useDispatch } from 'react-redux'
import { Open } from '../../../Redux/slice/Loginslice'
import { useNavigate } from 'react-router-dom'
function Introduce() {
    const dispatch = useDispatch()
  return (
    <div className={styles.introduce}>
      <div className={styles.introduce_texttitle}>
        <img src='./img/Untitled123.png' alt='introduce'/>
        <h1 className={styles.introduce_text}>The world’s most powerful AI photo and video art generation engine.
What will you create?</h1>
        <button className={styles.introduce_buttonExplore} onClick={()=>dispatch(Open())}><i class="fa-solid fa-magnifying-glass fa-bounce"></i> EXPLORE</button>
      </div>
      <div className={styles.introduce_texttitle2}>
        <h1 className={styles.introduce_texth1}>Bring your ideas to life</h1>
        <p className={styles.introduce_textp}>Gencraft is an AI platform that creates unique images, designs, and art from text descriptions.</p>
        <a style={{display:'block'}} href='https://apps.apple.com/us/app/gencraft-ai-art-generator/id1670810819'><img style={{width:'250px'}} src='/img/blackapple.png'/></a><br/>
        <a style={{marginBottom:'50px',display:'block'}} href='https://play.google.com/store/apps/details?id=com.gencraftandroid&pli=1'><img style={{width:'250px'}} src='/img/chplaysmall.png'/></a>
        <button className={styles.introduce_buttonExplore} onClick={()=>dispatch(Open())}><i class="fa-solid fa-magnifying-glass fa-bounce"></i> EXPLORE</button>
      </div>
    </div>
  )
}

export default Introduce