import React,{useEffect} from 'react'
import Header from '../../components/Header/Header'
import Boxup from '../../components/Boxup/Boxup'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Layout() {
  const navigate = useNavigate()
  const isopen = useSelector(state=>state.login.isOpen)
  useEffect(() => {
    const User = localStorage.getItem('user');
    if (User) {
      navigate('/generate');
    }
  }, [()=>(console.log('User exists in localStorage, navigating to /generate'))]);
  return (
      <div style={{position:'relative'}}>
            <Header/>
            <Outlet/>
            {isopen ? <Boxup/>:''}
      </div>
  )
}

export default Layout