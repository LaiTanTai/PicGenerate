import React, { useState } from 'react'
import styles from './Video.module.scss'
function Video() {
    const picstate = useState({
        'pic1':true,
        'pic2':false,
        'pic3':false
    })
  return (
    <div className={styles.Video}>
        <div style={{width:'50%'}}>
            <h1 className={styles.video_text_h1}>Introducing video generation</h1>
            <p className={styles.video_text_p}>Provide a prompt and watch Gencraft create unique videos for you in a matter of seconds.</p>
            <button className={styles.video_text_generate_button}><img src='./img/star.svg' alt='star'/>  Generate Now</button>
        </div>
        <div style={{display:'flex',width:'50%',justifyContent:'center',gap:'30px'}}>
            <div className={styles.video_hidden}>
                <video className={styles.video_source} hover width='280px' height='280px' autoPlay loop >
                    <source  src='./video/video1.mp4' type="video/mp4"></source>
                </video>
            </div>
            <div className={styles.video_hidden}>
                <video className={styles.video_source} width='280px' height='280px'  autoPlay loop >
                    <source  src='./video/video2.mp4' type="video/mp4"></source>
                </video>
            </div>
            <div className={styles.video_hidden}>
                <video className={styles.video_source} width='280px' height='280px' autoPlay loop >
                    <source  src='./video/video3.mp4' type="video/mp4"></source>
                </video>
            </div>
        </div>
    </div>
  )
}

export default Video