import React from 'react'
import styles from './Loader.module.scss'
function Loader() {
  return (
    <div className={styles.bgOut}>
      <div className={styles.bgIn1}></div>
      <div className={styles.bgIn2}></div>
      <div className={styles.bgIn3}></div>
    </div>
  )
}

export default Loader