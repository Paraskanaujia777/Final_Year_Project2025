import React from "react";
import axios from "axios";

import { useState, useEffect,useContext, props } from "react";

import '../assets/css/Home.css';
import { userContext } from "./Nav"; 

function Home() {

    // console.log(props)

    const result = useContext(userContext)

    const [info, setInfo] = useState([])

    const allData = async ()=>{

        try { 
            let products = await fetch('http://localhost:4000/api/products')
            products = await  products.json();
            setInfo(products);

        } catch (error) {
            console.log("error occured on frontend")
        }

      
    }

    
    // allData()
    useEffect(() => {
        allData(); // Fetch data when the component mounts
      }, []); // Empty dependency array ensures this runs only on

    const alldata = info.map(product =>
        <div key={product.id} className="card m-2 mb-4 " style={{ width: "20rem", height: "auto" }}>
            <img src={product.image} className="card-img-top p-3" style={{ width: "20rem", height: "15rem" }} alt="..." />
            <div className="card-body">
                <p className="card-title"> <b>Category :</b>{product.category}</p>
                <p><b>Product Desciption :</b> {product.description}</p>
                <p><b>Rating :</b> {product.rating.rate}</p>
                
                <a href="#" className="btn  bg-primary-subtle">Shop</a>
            </div>
        </div>
    );


    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://plus.unsplash.com/premium_photo-1684179639963-e141ce2f8074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Compare Before Shopping  </h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1681398745480-151fc6addaaf?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1699855177095-44b4da0508de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="d-flex justify-content-between pt-5 flex-wrap mx-4">
                {alldata}
            </div>
            {/* <button onClick={newDiv} className="btn btn-primary p-2 m-2">Add Elements</button> */}

        </>
    )
}

export default Home;