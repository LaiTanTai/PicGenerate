import React from 'react'
import styles from './Picture.module.scss'
function Picture() {
  return (
    <div className={styles.Pics}>
      <img className={styles.images} src='./img/img_hero_section_3_2.jpg' alt='images'/>
      <img className={styles.overlay} src='./img/Overlay.png' alt='overlay'/>
    </div>
  )
}
// kfC9YLmT2DEZEgbVjWiG14XliLk5zbC1zpsWsZ5VstkvkPOGU40eZReZ
export default Picture