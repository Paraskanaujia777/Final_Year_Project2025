import React from "react";
import '../assets/css/Footer.css'
import { Link } from "react-router-dom";

function Footer() {




    return (
        <><footer>
            <section id="footer" className=" d-flex justify-content-between px-4 bg-primary-subtle ">
                <div className="d-flex gap-5 w-75 justyify-content-between align-items-center mx-auto">
                    <div className="d-flex flex-column mb-5 mt-5 align-content-start ">
                        <img src="../src/assets/media/finalyearprojectlogo.webp" alt="" className="w-30 h-30" />
                        <h3>Contact</h3>
                        <p>Address: 562 Wellington Road, street 32, New Delhi </p>
                        <p>Phone: +1234567890 / +(91)1234567890</p>
                        <p>hours: 10:00 - 18:00 mon-sat</p>
                        <h3><strong>FOLLOW US</strong></h3>
                        <div className="d-flex justify-content-between">
                            <a href=""><span><i className="fa-brands fa-facebook"></i></span></a>
                            <a href=""><span><i className="fa-brands fa-twitter"></i></span></a>
                            <a href=""><span><i className="fa-brands fa-instagram"></i></span></a>
                            <a href=""><span><i className="fa-brands fa-pinterest"></i></span></a>
                            <a href=""><span><i className="fa-brands fa-youtube"></i></span></a>
                        </div>

                    </div>

                    <div className=" d-flex flex-column mb-5 mt-5 ">
                        <div>
                            <h3>About</h3>
                            <p>About Us</p>
                            <p>Delivery Information</p>
                            <p>Privacy policy</p>
                            <p>Terms And Condition</p>
                            <p>Contact Us</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column mb-5 mt-5">
                        <h3>My Account</h3>
                        <Link to={'/signin'}> <p>SignIn </p></Link>
                        <p>View cart</p>
                        <p>My Wish List</p>
                        <p>Track My Order</p>
                        <p>Help</p>
                    </div>

                   

                </div>
            </section>
            <p className="copyright text-center m-3 "> 2025 , E-Commerce Price Comparison Site</p>
        </footer>
        </>
    )
}

export default Footer
