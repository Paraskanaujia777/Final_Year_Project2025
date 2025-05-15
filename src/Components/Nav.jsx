import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import '../assets/css/Nav.css'
import Home from "./HomePage";
import SearchedData from "./SearchData";

export const userContext = createContext();


const Navbar = ({setResult})=> {

    const [search, setSearch] = useState("");
    



    const findData = async () => {

        if (search) {
            try {
                let products = await fetch(`http://localhost:4000/api/search?q=${search}`)
                products = await products.json();
                setResult(products);
                console.log(products)
                // console.log(products)

            } catch (error) {
                console.log("error occured on frontend")
            }
        }
        else {
            alert('enter valid search')
        }

    }

    

    // let allResul = result.map(product =>
    //     <div key={product.id} className="card m-2 mb-4 " style={{ width: "20rem", height: "auto" }}>
    //         <img src={product.image} className="card-img-top p-3" style={{ width: "20rem", height: "15rem" }} alt="..." />
    //         <div className="card-body">
    //             <p className="card-title"> <h5>Category :</h5>{product.category}</p>
    //             <p><h5>Product Desciption :</h5> {product.description}</p>
    //             <p><h4>Rating :</h4> {product.rating.rate}</p>

    //             <a href="#" className="btn  bg-primary-subtle">Shop</a>

    //         </div>
    //     </div>
    // )




    return (
        <>
            {/* <userContext.Provider value={result}> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 position-relative  ">
                    <div className="container-fluid   ">
                        <a className="navbar-brand" href="#"><img src="../src/assets/media/finalyearprojectlogo.webp" alt="" className="w-50 h-50" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <Link to='/'><a className="nav-link active" aria-current="page">Home</a></Link> */}
                                    <Link to='/'><span className="nav-link active" aria-current="page">Home</span></Link>
                                    {/* <a className="nav-link active" aria-current="page">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link " href="#">BestDeals</a> */}
                                    <Link to='/signin'> <span className="nav-link " >SignIn</span></Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link " href="#">BestDeals</a> */}
                                    <Link to='/signup'> <span className="nav-link " >SignUp</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Men</a></li>
                                        <li><a className="dropdown-item" href="#">Women</a></li>
                                        {/* <li><hr className="dropdown-divider"/></li> */}
                                        <li><a className="dropdown-item" href="#">Children</a></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                <a className="nav-link " aria-disabled="true">Disabled</a>
                            </li> */}
                            </ul>
                            <form className="d-flex " role="search" />
                            <div className="w-20">
                                <input className="form-control me-2 " onChange={(e) => { setSearch(e.target.value) }} type="search" placeholder="Search Products" aria-label="Search" />
                            </div>
                            <button className="btn btn-outline-success" onClick={findData} type="submit">Search Amazon / Flipkart</button>
                            <form />
                        </div>
                    </div>
                </nav>
                {/* <Outlet/> */}

                {/* <div className="d-flex justify-content-between pt-5 flex-wrap mx-4">
                {allResul}
            </div> */}
                {/* <p>{result}</p> */}

                {/* <Outlet/> */}

            {/* </userContext.Provider> */}

            {/* <SearchedData result={result} /> */}
            {/* <Outlet /> */}
        </>
    )
}


export default Navbar;