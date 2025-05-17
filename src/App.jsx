import { useState } from 'react'
import Navbar from './Components/Nav'
// import Signup from './Components/Signup'
import Footer from './Components/Footer'
import Home from './Components/HomePage'
import Signup from './Components/Signup'
// import SearchedData from './Components/SearchData'
// import { Outlet } from 'react-router-dom'
import GeminiSummary from './Components/Aicomponent'
import AboutUs from './Components/Aboutus'
import './index.css';



import { BrowserRouter, Outlet,Routes, Route } from 'react-router-dom'

import Signin from './Components/Signin'

function App() {


  const [result, setResult] = useState([]);

  const [search, setSearch] = useState("");


  return (
    <>
    <BrowserRouter>
    <Navbar setResult ={setResult} search ={search} setSearch ={setSearch}/>
    {/* <Home/> */}



    <Outlet/>

    <div className="main-content">
    <Routes>

      <Route path='/' element={<Home result ={result}/> }></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/airesponse' element={<GeminiSummary search ={search}/>}></Route>
      <Route path="/about" element={<AboutUs />} />

      {/* <Route path='/searchedData' element={<SearchedData/>}></Route> */}
      {/* <Route path='/filterData' element={<FilterData/>}></Route> */}
      <Route></Route>

    </Routes>
    </div>


    <Footer/>
    
    </BrowserRouter>
    </>
  )
}

export default App




