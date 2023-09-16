import React from 'react'
import styles from './Deal.module.scss'
function Deal() {
  return (
    <div className={styles.Ideas}>
        <div className={styles.Ideas_text}>
            <h1 className={styles.Ideas_text_h1}>Bring your ideas to life</h1>
            <p className={styles.Ideas_text_p}>Transform a few words into stunning AI generated art, either photos or videos.</p>
            <button className={styles.Ideas_text_generate_button}><img src='./img/star.svg' alt='star'/>  Generate Now</button>
        </div>
        <div className={styles.Ideas_image_video}>
          <div style={{position:'relative',height:'100%'}}>
          <video className={styles.Ideas_video_1} width='26%' height='26%' autoPlay loop>
            <source src='./video/video4.mp4' type='video/mp4'/>
            
          </video>
          <img className={styles.Ideas_video_camera} src='./img/camera.svg' alt='camera'/>
          <img className={styles.Ideas_image_1} src='./img/Imagecityhouse.png' alt='pic2'/>
          <img className={styles.Ideas_image_2} src='./img/eye.png' alt='eye'/>
          </div>
        </div>
    </div>
  )
}

export default Deal