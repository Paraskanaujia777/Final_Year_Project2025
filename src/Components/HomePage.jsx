import React from "react";
import axios from "axios";

import { useState, useEffect, useContext, props } from "react";

import '../assets/css/Home.css';
import { userContext } from "./Nav";

const Home = ({ result }) => {

    // console.log(props)

    // const result = useContext(userContext)

    const [info, setInfo] = useState([])

    // const allData = async ()=>{

    //     try { 
    //         let products = await fetch('http://localhost:4000/api/products')
    //         products = await  products.json();
    //         setInfo(products);

    //     } catch (error) {
    //         console.log("error occured on frontend")
    //     }
    // }


    // allData()
    // useEffect(() => {
    //     allData(); // Fetch data when the component mounts
    //   }, []); // Empty dependency array ensures this runs only on

    // const alldata = result.map(product =>
    //      {result.map((item, index) => (
    //             <div key={index} className="card m-2 mb-4 " style={{ width: "20rem", height: "auto" }}>
    //                 <img src={item.image} className="card-img-top p-3" style={{ width: "20rem", height: "15rem" }} alt="..." />
    //                 <div className="card-body">
    //                     {/* <p className="card-title"> <b>Category :</b>{item.category}</p> */}
    //                     <p><b>Product Desciption :</b> {item.title}</p>
    //                     <p><b>Price :</b> {item.price}</p>
    //                     <p><b>Rating :</b> {item.stars}</p>

    //                     <a href={item.url} className="btn  bg-primary-subtle">Shop</a>
    //                 </div>
    //             </div>
    //         ))}
    // );


    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade mb-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://plus.unsplash.com/premium_photo-1684179639963-e141ce2f8074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block classy-caption">
                            <h5>Compare Before Shopping  </h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1681398745480-151fc6addaaf?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block classy-caption">
                            <h5>Best Deals, One Place</h5>
                            <p>Compare Amazon, Flipkart, and more – before you buy.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1699855177095-44b4da0508de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block classy-caption">
                            <h5>Never Overpay Again</h5>
                            <p>Get the best price from all top eCommerce sites.</p>
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

            {/* <div id="carouselExampleCaptions" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://plus.unsplash.com/premium_photo-1684179639963-e141ce2f8074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                        <div className="carousel-caption custom-caption">
                            <h2>Compare Prices Before You Buy</h2>
                            <p>Search & compare across Flipkart, Amazon, and more.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1681398745480-151fc6addaaf?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                        <div className="carousel-caption custom-caption">
                            <h2>Smart Shopping, Smarter Decisions</h2>
                            <p>Instantly find the best prices and deals.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1699855177095-44b4da0508de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                        <div className="carousel-caption custom-caption">
                            <h2>All Stores in One Search</h2>
                            <p>Why visit 10 sites? Search once, compare all.</p>
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
            </div> */}




            <div className="d-flex flex-wrap justify-content-center gap-4">
                {/* d-flex justify-content-between pt-5 flex-wrap mx-4 */}

                {result.map((item, index) => (
                    <div className="card m-3 border-0 shadow" style={{ width: "22rem", borderRadius: "16px", overflow: "hidden" }}>
                        <div style={{ overflow: "hidden" }}>
                            <img
                                src={item.thumbnail}
                                className="card-img-top"
                                alt="Product"
                                style={{
                                    height: "240px",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            />
                        </div>

                        <div className="card-body px-4 py-3">
                            {/* <h5 className="card-title mb-2" style={{ fontWeight: "600", color: "#333" }}>Nike Running Shoes</h5> */}
                            <p className="mb-1 text-muted"><strong>Marketplace:</strong> {item.source}</p>
                            <p className="mb-1"><strong>Description:</strong>{item.title}</p>

                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span className="badge bg-success p-2 px-3 fs-6">{item.price}</span>
                                <span className="text-warning fw-semibold">⭐ {item.rating}</span>
                            </div>

                            <p className="mt-2 mb-3 text-muted"><strong>Reviews:</strong> {item.reviews}</p>

                            <a
                                href={item.product_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-dark w-100"
                                style={{ borderRadius: "10px", fontWeight: "500" }}
                            >
                                🛍️ Shop Now
                            </a>
                        </div>
                    </div>


                    // <div className="card m-3 shadow-sm border-1" style={{ width: "20rem", borderRadius: "15px", overflow: "hidden" }}>
                    //     <img
                    //         src={item.thumbnail}
                    //         className="card-img-top"
                    //         alt="Product"
                    //         style={{
                    //             height: "15rem",
                    //             objectFit: "cover",
                    //         }}
                    //     />
                    //     <div className="card-body px-3 py-3">
                    //         <h6 className="text-muted mb-2"><b>Marketplace:</b> {item.source}</h6>
                    //         <p className="mb-1"><b>Description:</b>{item.title}</p>
                    //         <p className="mb-1"><b>Price:</b> {item.price}</p>
                    //         <p className="mb-1"><b>Rating:</b> ⭐ {item.rating}</p>
                    //         <p className="mb-3"><b>Reviews:</b>{item.reviews}</p>
                    //         <a
                    //             href={item.product_link}
                    //             target="_blank"
                    //             rel="noopener noreferrer"
                    //             className="btn btn-dark w-100"
                    //             style={{ borderRadius: "10px" , fontWeight: "500"  }}
                    //         >
                    //            🛍️  Shop Now
                    //         </a>
                    //     </div>
                    // </div>

                ))}

            </div>

            {/* <div className="d-flex justify-content-between pt-5 flex-wrap mx-4">
                {alldata}
            </div> */}
            {/* <button onClick={newDiv} className="btn btn-primary p-2 m-2">Add Elements</button> */}

        </>
    )
}

export default Home;