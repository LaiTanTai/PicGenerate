import React from 'react'
import styles from './Fuel.module.scss'
function Fuel() {
  return (
    <>
    <div className={styles.Fuel}>
        <div className={styles.Fuel_Image}>
            <img style={{width:'100%'}} src='./img/fuel.png' alt='road'/>
        </div>
        <div className={styles.Fuel_Text}>
            <h1 className={styles.Fuel_text_h1}>Fuel your imagination</h1>
            <p className={styles.Fuel_text_p1}>Have writer’s block? Gencraft can help with that too.</p>
            <p className={styles.Fuel_text_p1}>Visualize new ideas by adding keywords that inspire you, then watch your words come to life.</p>
            <button className={styles.Fuel_button}><img src='./img/star.svg' alt='star'/>  Get Inspired</button>
        </div>
    </div>
    <div className={styles.Fuel2}>
        <div className={styles.Fuel_Text}>
            <h1 className={styles.Fuel_text_h1}>Fuel your imagination</h1>
            <p className={styles.Fuel_text_p1}>Have writer’s block? Gencraft can help with that too.</p>
            <p className={styles.Fuel_text_p1}>Visualize new ideas by adding keywords that inspire you, then watch your words come to life.</p>
            <button className={styles.Fuel_button}><img src='./img/star.svg' alt='star'/>  Get Inspired</button>
        </div>
        <div className={styles.Fuel_Image}>
            <img style={{width:'100%'}} src='./img/fuel.png' alt='road'/>
        </div>
    </div>
    </>
  )
}

export default Fuel