import React from 'react'
import styles from './Footer.module.scss'
function Footer() {
  return (
    <>
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
        <div className={styles.Footer_contact}>
          <ul className={styles.Footer_contact_ul}>
            <li className={styles.Footer_contact_li}>Information</li>
            <li className={styles.Footer_contact_li}>FAQ</li>
            <li className={styles.Footer_contact_li}>Term of Use</li>
            <li className={styles.Footer_contact_li}>Privacy Policy</li>
            <li className={styles.Footer_contact_li}>Content Policy</li>
          </ul>
          <ul className={styles.Footer_contact_ul}>
            <li className={styles.Footer_contact_li}>Contact Us</li>
            <li className={styles.Footer_contact_li}>support@gencraft.com</li>
          </ul>
        </div>
    </div>
    <div className={styles.Footer2}>
        <div>
          <ul className={styles.Footer_contact_ul}>
            <li className={styles.Footer_contact_li}>Information</li>
            <li className={styles.Footer_contact_li}>FAQ</li>
            <li className={styles.Footer_contact_li}>Term of Use</li>
            <li className={styles.Footer_contact_li}>Privacy Policy</li>
            <li className={styles.Footer_contact_li}>Content Policy</li>
          </ul>
        </div>
        <div>
          <img style={{marginBottom:"5px",marginLeft:'25px'}} src='./img/Untitled.png' alt='octopus'/>
          <div style={{display:'flex',marginTop:'5px',marginBottom:'5px', marginLeft:'25px'}}>
                <a style={{width:'175px'}}  href='https://apps.apple.com/us/app/gencraft-ai-art-generator/id1670810819'>
                    <img style={{width:'100%'}} src='./img/apple.png' alt='apple'/>
                </a>    
                <a style={{width:'175px',marginLeft:"25px"}} href='https://play.google.com/store/apps/details?id=com.gencraftandroid'>
                    <img style={{width:'100%'}} src='./img/chplay.png' alt='ch'/>
                </a>    
          </div>
          <p style={{color:'white',marginLeft:'25px'}}>© 2023 Gencraft | All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer