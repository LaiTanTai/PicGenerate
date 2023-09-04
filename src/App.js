import React, { Suspense, lazy } from 'react'
import Loader from './components/Loader/Loader'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const MainLayout = lazy(()=> import('./layouts/Layout/MainLayout'))
const Layout = lazy(()=>import('./layouts/Layout/Layout'))
const Explore = lazy(()=>import('./module/Explore/Explore'))
const Generate = lazy(()=>import('./module/Generate/Generate'))
const Mainpage = lazy(()=>import('./module/Mainpage/Main'))
function App() {
  return (
       <Suspense fallback={<Loader/>}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Mainpage/>}/>
                <Route path='/explore' element={<Explore/>}/>
              </Route>
              <Route path='/generate' element={<MainLayout/>}>
                <Route path='/generate' element={<Generate/>}/>
                <Route path='/generate/Explore' element={<Explore/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
       </Suspense>
  )
}

export default App