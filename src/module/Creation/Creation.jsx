import React from 'react'
import styles from './Creation.module.scss'
import { useSelector } from 'react-redux'
function Creation() {
  const {user} = useSelector(state=>state.User)
  return (
    <div className={styles.Creation}>
      <h1 className={styles.Creation_h1}>My Creations</h1>
      {
        user.images.map((value)=>{
          return (<img src={value} style={{width:'400px',margin:'1px 1px 1px 1px'}}/>)
        })
      }
    </div>
  )
}

export default Creation