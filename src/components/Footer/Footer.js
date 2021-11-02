import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Athena Learning</h3>

                <p className="footer-links">
                    <Link to="/">Home</Link>
                    ·
                    <a href="#">TC</a>
                    ·
                    <a href="#">TC</a>
                    ·
                    <a href="#">TC</a>
                    ·
                    <a href="#">TC</a>
                    ·
                    <a href="#">Contact</a>
                </p>

                <p className="footer-company-name">Athena Learning &copy; 2021</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>lorem ipsum</span> Delhi, India</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 555 123456</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">athena@learning.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

                <div className="footer-icons">

                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

            </div>

        </footer>

    )
}

export default Footer
