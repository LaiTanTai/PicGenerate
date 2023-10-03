import React,{useEffect, useState} from 'react'
import styles from './Explore.module.scss'
import { getAllImage } from '../../api/ImageAPI'
import { GetAllUser } from '../../api/UserApi'
function Explore() {
  const [Post,setPost]= useState(true)
  const [User,setUser] = useState(false)
  const [allImage,setAllImage] = useState([])
  const [allUser,setAllUser] = useState([])
  const [menu,setMenu] = useState(1)
  const [usermenu,setUsermenu] = useState(1)
  const handlePost = ()=>{
    setPost(true)
    setUser(false)
  }
  const handleImageMenu = ()=>{
    const count = allImage.length
    console.log(count)
    const num = Math.floor(count/6)
    console.log(num)
    let numArray = [];
    for(let i = 0 ; i <= num;i++){
      numArray.push(i+1)
    }
    return(
        numArray.map((value)=>{
          return (
            <button onClick={()=>setMenu(value)} className={styles.Menu}>{value}</button>
          )
        })
    )
  }
  const handleImageNav = ()=>{
    let ImageArray = []
    allImage.map((value)=>{
        ImageArray = [...ImageArray,value]
      })
    return (
      ImageArray.map((value,index)=>{
        if(index>=(menu-1)*6 && index<=6*menu - 1){
          return (
            <img src={value} style={{width:'400px',margin:'1px 1px 1px 1px'}}/>
          )
        }
      })
    )
  }
  const handleUserMenu = ()=>{
    const num = Math.floor(allUser.length/6)
    let numArray = [];
    for(let i = 0 ; i <= num;i++){
      numArray.push(i+1)
    }
    return(
      numArray.map((value)=>{
        return (
          <button onClick={()=>setUsermenu(value)} className={styles.Menu}>{value}</button>
        )
      })
  )
  }
  const handleUser = ()=>{
    setPost(false)
    setUser(true)
  }
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await getAllImage()
      setAllImage(data)
    }
    fetchData();
    const fetchUser = async ()=>{
      const data = await GetAllUser();
      console.log(data)
      setAllUser(data);
    }
    fetchUser();
  },[])
  return (
    <div className={styles.Explore}>
      <h1 className={styles.title}>Explore</h1>
      <div className={styles.Post_User_div}>
        {Post ?<button className={styles.Post_User_true} onClick={handlePost}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"><g stroke-width="2"><rect width="18" height="18" x="2.5" y="3" rx="1.857"></rect><path d="M2.214 19.858l5.257-5.491a1.43 1.43 0 012.18.138l1.699 2.294a.2.2 0 00.313.011l4.416-5.189a1.43 1.43 0 012.214.046l2.493 3.191"></path></g><circle cx="7.214" cy="8.285" r="1.65" stroke-width="1.3"></circle></svg> Posts</button>:<button className={styles.Post_User} onClick={handlePost}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"><g stroke-width="2"><rect width="18" height="18" x="2.5" y="3" rx="1.857"></rect><path d="M2.214 19.858l5.257-5.491a1.43 1.43 0 012.18.138l1.699 2.294a.2.2 0 00.313.011l4.416-5.189a1.43 1.43 0 012.214.046l2.493 3.191"></path></g><circle cx="7.214" cy="8.285" r="1.65" stroke-width="1.3"></circle></svg> Posts</button>
        }
        <p style={{fontSize:'30px',margin:'0px 10px 0px 10px',paddingBottom: "10px"}}>|</p>
        {User ? <button className={styles.Post_User_true} onClick={handleUser}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.088 7.147a4.15 4.15 0 01-4.147 4.147 4.15 4.15 0 01-4.147-4.147A4.15 4.15 0 0111.941 3a4.15 4.15 0 014.147 4.147zm2.193 7.712c-4.847-1.464-8.492-1.459-13.533.016-1.279.374-2.207 1.466-2.448 2.777A3.682 3.682 0 005.922 22h11.134a3.702 3.702 0 003.64-4.371c-.239-1.3-1.15-2.389-2.415-2.771z"></path></svg> Users</button> :<button className={styles.Post_User} onClick={handleUser}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.088 7.147a4.15 4.15 0 01-4.147 4.147 4.15 4.15 0 01-4.147-4.147A4.15 4.15 0 0111.941 3a4.15 4.15 0 014.147 4.147zm2.193 7.712c-4.847-1.464-8.492-1.459-13.533.016-1.279.374-2.207 1.466-2.448 2.777A3.682 3.682 0 005.922 22h11.134a3.702 3.702 0 003.64-4.371c-.239-1.3-1.15-2.389-2.415-2.771z"></path></svg> Users</button>}
      </div>
      <hr style={{margin:"0"}}/>
      <div style={{marginTop:'50px'}}>
        {
          Post ? 
          <div>
            {handleImageNav()}
            <div>{handleImageMenu()}</div>
          </div>
          : 
        <div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
              {allUser.map((value,index)=>{
                if(index >= (usermenu-1)*6 && index<=6*usermenu - 1){
                  return <div style={{backgroundColor:'rgb(240 243 248)',height:'fit-content',borderRadius:'5px'}}>
                        <div style={{display:'flex',height:'50%',alignItems:'center'}}>
                            <div style={{backgroundColor:'rgb(41 68 103)',width:"60px",height:'60px',fontSize:'40px',borderRadius:'50%',color:'white'}}>{value.username.charAt(0)}</div>
                            <h2 style={{marginLeft:'10px',fontWeight:'500',fontSize:'20px'}}>{value.username}</h2>
                        </div>
                        <div style={{width:'100%'}}>
                          {
                            value.url.map((image,indexin)=>{
                              if(indexin<3){
                                return <img src={image} style={{width:'150px'}}/>
                              }
                            })
                          } 
                        </div>
                  </div>
                }
              })}
            </div>
          </div> 
          <div>{handleUserMenu()}</div>
        </div>
        }
      </div>
    </div>
  )
}

export default Explore