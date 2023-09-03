import React from 'react'
import styles from './Showcase.module.scss'
function Showcase() {
  return (
    <div className={styles.Showcase}>
        <div style={{width:'50%'}}>
            <h1 className={styles.Showcase_text_h1}>Showcase your creative brand</h1>
            <p className={styles.Showcase_text_p1}>Find your voice and create content that truly represents you.</p>
            <p className={styles.Showcase_text_p1}>Download your creations and share them with the world.</p>
            <button className={styles.Showcase_button}><img src='./img/star.svg' alt='star'/>  Start Creating</button>
        </div>
        <div style={{width:'50%'}}>
            <img style={{width:'100%'}} src='./img/women.png' alt='women'/>
        </div>
    </div>
  )
}

export default Showcase