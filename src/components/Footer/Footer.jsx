import React from 'react'
import styles from './Footer.module.scss'
function Footer() {
  return (
    <div className={styles.Footer}>
        <div>
          <img style={{marginBottom:"50px"}} src='./img/Untitled.png' alt='octopus'/>
          <div style={{display:'flex',marginTop:'50px',marginBottom:'150px'}}>
                <a style={{width:'175px'}}  href='https://apps.apple.com/us/app/gencraft-ai-art-generator/id1670810819'>
                    <img style={{width:'100%'}} src='./img/apple.png' alt='apple'/>
                </a>    
                <a style={{width:'175px',marginLeft:"25px"}} href='https://play.google.com/store/apps/details?id=com.gencraftandroid'>
                    <img style={{width:'100%'}} src='./img/chplay.png' alt='ch'/>
                </a>    
          </div>
          <p style={{color:'white'}}>© 2023 Gencraft | All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer