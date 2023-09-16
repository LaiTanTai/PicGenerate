import React, { useState } from 'react';
import styles from './HeaderMain.module.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function HeaderMain() {
    const [logoutOpen,SetLogoutOpen] = useState(false) 
    const {user} = useSelector(state=>state.User) 
    const navigate = useNavigate()
    const Logout = ()=>{
      localStorage.removeItem('user');
      navigate('/')
    }
  return (
  <>
    <div className={styles.HeaderMain1}>
        <div className={styles.navbar}>
            <img src='/img/Untitled.png' alt='PicCRAFT'/>
            <button className={styles.generate} onClick={()=>(navigate('/generate'))}><img src='/img/star.svg' alt='star'/>Generate</button>
            <button className={styles.Explore} onClick={()=>(navigate('/generate/explore'))}><i class="fa-solid fa-magnifying-glass fa-bounce"></i> Explore</button>
            <button className={styles.Creation} onClick={()=>(navigate('/generate/Creation'))}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" d="M14.314 17.311h-8.86a3.285 3.285 0 01-3.289-3.289v-8.86a.585.585 0 00-.874-.505.58.58 0 00-.291.504v8.86a4.463 4.463 0 004.454 4.454h8.86c.208 0 .4-.111.505-.291a.58.58 0 000-.583.582.582 0 00-.505-.291z"></path><rect width="13.879" height="13.879" x="4.371" y="1.75" stroke="currentColor" stroke-width="1.5" rx="2.25"></rect><path fill="currentColor" fill-rule="evenodd" d="M6.301 11.39h9.639a.7.7 0 00.702-.626.7.7 0 00-.13-.487l-.66-.928-.878-1.231a.7.7 0 00-1.144 0l-.878 1.231-.251.359-1.041-1.464L9.99 5.9a.7.7 0 00-1.142 0l-1.67 2.344-1.45 2.039a.7.7 0 00.104.928.7.7 0 00.467.179z"></path></svg>My Creations</button>
            <div className={styles.User}>
              <button className={styles.Button} onClick={()=>SetLogoutOpen(!logoutOpen)}>{user.username.charAt(0)}</button>
              {logoutOpen ?<div style={{position:'absolute',top:'100%',right:'10%',width:'200px',height:'fit-content',zIndex:'11',backgroundColor:'white',border:'rgb(4, 11, 53) 2px solid',borderRadius:'10px'}}>
                  <div style={{height:'50px',padding:'10px 20px 10px 20px',display:'flex',alignItems:'center', borderBottom:'#8491a3 2px solid'}}>
                    <div style={{backgroundColor:'#6c79f1',borderRadius:'50%',width:'30px',height:'30px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'800'}}>
                      {user.username.charAt(0)}
                    </div>
                    <p>{user.username}</p>
                  </div>
                  <button onClick={Logout} style={{width:'100%',backgroundColor:'#6c79f1',fontWeight:'800',color:'white',height:'40px',border:'0',marginTop:'10px',borderRadius:'20px',cursor:'pointer'}}>Log Out</button>
              </div>:''}
            </div>
        </div>
    </div>
    <div className={styles.HeaderMain2} style={{position:'fixed',width:"100%",zIndex:"10"}}>
        <div className={styles.navbar}>
            <img src='/img/Untitled.png' alt='PicCRAFT'/>
            <button className={styles.generate} onClick={()=>(navigate('/generate'))}><img src='/img/star.svg' alt='star'/></button>
            <button className={styles.Explore} onClick={()=>(navigate('/generate/explore'))}><i class="fa-solid fa-magnifying-glass fa-bounce"></i></button>
            <button className={styles.Creation} onClick={()=>(navigate('/generate/Creation'))}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" d="M14.314 17.311h-8.86a3.285 3.285 0 01-3.289-3.289v-8.86a.585.585 0 00-.874-.505.58.58 0 00-.291.504v8.86a4.463 4.463 0 004.454 4.454h8.86c.208 0 .4-.111.505-.291a.58.58 0 000-.583.582.582 0 00-.505-.291z"></path><rect width="13.879" height="13.879" x="4.371" y="1.75" stroke="currentColor" stroke-width="1.5" rx="2.25"></rect><path fill="currentColor" fill-rule="evenodd" d="M6.301 11.39h9.639a.7.7 0 00.702-.626.7.7 0 00-.13-.487l-.66-.928-.878-1.231a.7.7 0 00-1.144 0l-.878 1.231-.251.359-1.041-1.464L9.99 5.9a.7.7 0 00-1.142 0l-1.67 2.344-1.45 2.039a.7.7 0 00.104.928.7.7 0 00.467.179z"></path></svg></button>
            <div className={styles.User}>
              <button className={styles.Button} onClick={()=>SetLogoutOpen(!logoutOpen)}>{user.username.charAt(0)}</button>
              {logoutOpen ?<div style={{position:'absolute',top:'100%',right:'10%',width:'200px',height:'fit-content',zIndex:'11',backgroundColor:'white',border:'rgb(4, 11, 53) 2px solid',borderRadius:'10px'}}>
                  <div style={{height:'50px',padding:'10px 20px 10px 20px',display:'flex',alignItems:'center', borderBottom:'#8491a3 2px solid'}}>
                    <div style={{backgroundColor:'#6c79f1',borderRadius:'50%',width:'30px',height:'30px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'800'}}>
                      {user.username.charAt(0)}
                    </div>
                    <p>{user.username}</p>
                  </div>
                  <button onClick={Logout} style={{width:'100%',backgroundColor:'#6c79f1',fontWeight:'800',color:'white',height:'40px',border:'0',marginTop:'10px',borderRadius:'20px',cursor:'pointer'}}>Log Out</button>
              </div>:''}
            </div>
        </div>
    </div>
    </>
  )
}

export default HeaderMain;