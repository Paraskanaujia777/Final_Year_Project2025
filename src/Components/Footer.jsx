
import React from "react";
import '../assets/css/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-primary-subtle text-dark pt-5">
            <div className="container">
                <div className="row justify-content-between">

                    {/* Contact Info */}
                    <div className="col-md-4 mb-4">
                        <h5>Contact</h5>
                        <p>Address: 562 Wellington Road, street 32, New Delhi</p>
                        <p>Phone: +(91)1234567890 / +(91)1234567890</p>
                        <p>Hours: 10:00 - 18:00 Mon-Sat</p>

                    </div>

                    {/* About Us */}
                    <div className="col-md-3 mb-4">
                        <h5>About</h5>
                        <Link to="/about" className="text-decoration-none text-dark">About Us</Link>

                        <div className="">
                        <h6 className="mt-4"><strong>FOLLOW US</strong></h6>
                        <div className="d-flex gap-3 fs-5">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    </div>
                    

                    {/* My Account */}
                    <div className="col-md-3 mb-4">
                        <h5>My Account</h5>
                        <Link to="/signin" className="d-block text-decoration-none text-dark mb-1">Sign In</Link>
                        <Link to="/signup" className="d-block text-decoration-none text-dark">Sign Up</Link>
                    </div>

                </div>

                <hr />
                <p className="text-center mb-2">© 2025, E-Commerce Price Comparison Site</p>
            </div>
        </footer>
    );
}

export default Footer;
