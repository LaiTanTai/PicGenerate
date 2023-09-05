import React, { useEffect } from 'react'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import { Outlet, useNavigate } from 'react-router-dom'
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
            <HeaderMain/>
            <Outlet/>
        </div>

  )
}

export default MainLayout