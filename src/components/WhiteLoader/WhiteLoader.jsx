import React from 'react'
import styles from './WhiteLoader.module.scss'
function WhiteLoader() {
  return (
    <button className={styles.bgOut}>
      <div className={styles.bgIn1}></div>
      <div className={styles.bgIn2}></div>
      <div className={styles.bgIn3}></div>
    </button>
  )
}

export default WhiteLoader