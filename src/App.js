import React, { Suspense, lazy } from 'react'
import Loader from './components/Loader/Loader'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const Layout = lazy(()=>import('./layouts/Layout/Layout'))
const Explore = lazy(()=>import('./module/Explore/Explore'))
const Generate = lazy(()=>import('./module/Generate/Generate'))
function App() {
  return (
       <Suspense fallback={<Loader/>}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Generate/>}/>
                <Route path='/explore' element={<Explore/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
       </Suspense>
  )
}

export default App