import React, { useEffect } from 'react'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import { useNavigate } from 'react-router-dom'
function MainLayout() {
  const navigate = useNavigate()
  useEffect(()=>{
    const User = localStorage.getItem('user')
    if(!User){
      navigate('/')
    }
  },[()=>(console.log("checkUser"))])
  return (
        <div style={{position:'relative'}}>
            {console.log('render')}
            <HeaderMain/>
        </div>

  )
}

export default MainLayout