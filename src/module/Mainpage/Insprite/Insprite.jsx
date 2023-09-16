import React from 'react'
import styles from './Insprite.module.scss'
function Insprite() {
  return (
    <div className={styles.Insprite}>
        <div className={styles.Insprite_Text}>
            <h1 className={styles.Insprite_text_h1}>Inspiration strikes at odd moments.</h1>
            <p className={styles.Insprite_text_p1}>Gencraft will be there when it does.</p>
            <p className={styles.Insprite_text_p1}>Available across all your devices - Web, iOS, and Android</p>
            <div className={styles.Insprite_Text_Button}>
                <a style={{width:'175px'}}  href='https://apps.apple.com/us/app/gencraft-ai-art-generator/id1670810819'>
                    <img style={{width:'100%'}} src='./img/apple.png' alt='apple'/>
                </a>    
                <a style={{width:'175px',marginLeft:"25px"}} href='https://play.google.com/store/apps/details?id=com.gencraftandroid'>
                    <img style={{width:'100%'}} src='./img/chplay.png' alt='ch'/>
                </a>    
            </div>
        </div>
        <div className={styles.Insprite_Image}>
            <img style={{width:'100%'}} src='./img/onroad.png' alt='road'/>
        </div>
    </div>
  )
}
export default Insprite