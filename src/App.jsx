import { useState } from 'react'
import Navbar from './Components/Nav'
// import Signup from './Components/Signup'
import Footer from './Components/Footer'
import Home from './Components/HomePage'
import Signup from './Components/Signup'
// import { Outlet } from 'react-router-dom'

import { BrowserRouter, Outlet,Routes, Route } from 'react-router-dom'

import Signin from './Components/Signin'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <Home/> */}



    <Outlet/>

    <Routes>

      <Route path='/' element={<Home /> }></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      {/* <Route path='/filterData' element={<FilterData/>}></Route> */}
      <Route></Route>

    </Routes>


    <Footer/>
    
    </BrowserRouter>
    </>
  )
}

export default App




