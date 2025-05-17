import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../assets/css/about.css'

const teamMembers = [
    {
        name: "Paras Kanaujia",
        role: "Full Stack Developer",
        image: "../src/assets/media/paras.jpg",
        linkedin: "https://www.linkedin.com/in/paras-kanaujia/",
        github: "https://github.com/ParasKanaujia777",
    },
    {
        name: "Soumya",
        role: "Frontend Designer",
        image: "../src/assets/media/soumya3.jpg",
        linkedin: "https://www.linkedin.com/in/soumya-669039319",
        github: "https://github.com/18soumya",
    },
    {
        name: "Shambhavi Mishra",
        role: "Frontend Engineer",
        image: "../src/assets/media/shambhavi.jpg",
        linkedin: "https://www.linkedin.com/in/shambhavi-mishra-07b833275",
        github: "https://github.com/Shambhavi-Mishra-28",
    },
];

const testimonials = [
    {
        quote: "This app completely changed the way I shop online. Super easy to compare prices!",
        name: "Ravi Kumar",
        title: "Tech Enthusiast",
    },
    {
        quote: "A must-have tool for any budget-conscious buyer.",
        name: "Sneha Sharma",
        title: "Freelancer",
    },
    {
        quote: "Elegant design and powerful backend. Great job by the dev team!",
        name: "Karan Verma",
        title: "Software Engineer",
    },
];

const AboutUs = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((el, idx) => {
            setTimeout(() => {
                el.classList.add("show");
            }, idx * 200);
        });
    }, []);

    return (
        <div className="container py-5 ">
            {/* Intro */}
            {/* <div className="text-center mb-5 fade-in">
                <h1 className="display-5 fw-bold">About Us</h1>
                <p className="lead text-muted mt-3">
                    We are a passionate team dedicated to making smart shopping effortless. Our price comparison tool helps users find the best deals across Amazon and Flipkart in one click.
                </p>
            </div> */}

            <div className="text-center mb-5 fade-in">
                <h1 className="display-5 fw-bold">About Us</h1>
                <div className="col-lg-10 mx-auto">
                    <p className="lead text-muted mt-3">
                        Welcome to <strong>Compario</strong>, your ultimate destination for smarter and faster online shopping. In today’s fast-paced digital world, finding the best deals across e-commerce platforms can be time-consuming and confusing — that’s where we come in.
                    </p>
                    <p className="lead text-muted mt-3">
                        We are a team of developers, designers, and tech enthusiasts committed to simplifying your shopping experience. Our intelligent price comparison engine aggregates product listings from multiple platforms like <strong>Amazon</strong> , <strong>Walmart</strong> and <strong>eBay</strong> to help you make well-informed decisions in just seconds.
                    </p>
                    <p className="lead text-muted mt-3">
                        With an intuitive interface, real-time price updates, and insightful product summaries powered by AI, we aim to give you an edge in online shopping. Whether you're a casual buyer or a savvy bargain hunter, <strong>Compario</strong> is built to serve your needs.
                    </p>
                    <p className="lead text-muted mt-3">
                        Our mission is to empower consumers with transparency, save time and money, and promote a smarter way to shop online. We believe in user-focused design, trustworthy technology, and delivering real value with every feature we build.
                    </p>
                </div>
            </div>


            {/* Team Section */}
            <section className="mb-5 fade-in">
                <h2 className="text-center mb-4">Meet the Team</h2>
                <div className="row">
                    {teamMembers.map((member, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                            <div className="card shadow h-100 text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="card-img-top rounded-circle mx-auto mt-4"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text text-muted">{member.role}</p>
                                    <div className="d-flex justify-content-center gap-3 mt-3">
                                        <a href={member.linkedin} className="text-primary" target="_blank" rel="noopener noreferrer"> 
                                            <FaLinkedin size={20} />
                                        </a>
                                        <a href={member.github} className="text-dark" target="_blank" rel="noopener noreferrer">
                                            <FaGithub size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-light rounded p-5 fade-in">
                <h2 className="text-center mb-4">What People Say</h2>
                <div className="row">
                    {testimonials.map((t, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <p className="card-text fst-italic text-dark">"{t.quote}"</p>
                                    <hr />
                                    <h6 className="mb-0">{t.name}</h6>
                                    <small className="text-muted">{t.title}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            {/* <section className="mt-5 fade-in">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-4">Send</button>
          </div>
        </form>
      </section> */}

            <section className="mt-5 fade-in">
                <div className="container p-4 p-md-5 bg-white shadow rounded-4">
                    <h2 className="text-center mb-4 fw-bold">Get in Touch</h2>
                    <p className="text-center text-muted mb-5">We'd love to hear from you! Whether you have a question or just want to say hello, our team is ready to help.</p>
                    <form className="row g-4">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                            <input type="text" className="form-control rounded-pill px-4 py-2 shadow-sm" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                            <input type="email" className="form-control rounded-pill px-4 py-2 shadow-sm" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                            <textarea className="form-control rounded-4 px-4 py-3 shadow-sm" id="message" rows="5" placeholder="Write your message here..." required></textarea>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill fw-semibold shadow-sm">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>


            {/* Scroll to Top */}
            <button
                className="btn btn-secondary position-fixed bottom-0 end-0 m-4"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑ Top
            </button>
        </div>
    );
};

export default AboutUs;
