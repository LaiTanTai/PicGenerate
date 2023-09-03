import React from 'react'
import styles from './Magic.module.scss'
function Magic() {
  return (
        <div className={styles.Magic}>
            <div style={{width:'50%'}}>
                <h1 className={styles.Magic_text_h1}>Gencraft might make you believe in magic.</h1>
                <p className={styles.Magic_text_p1}>Don’t take our word for it.<br/>
Generate your first piece of artwork in 30 seconds or less</p>
                <p className={styles.Magic_text_p1}>To learn more about our platform, visit our <a href='https://gencraft.zendesk.com/hc/en-us'>FAQ.</a></p>
            </div>
            <div style={{width:'50%'}}>
                <img style={{width:'100%'}} src='./img/scrach.png' alt='scrach'/>
            </div>
        </div>
  )
}

export default Magic;