import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <p>Now learning from anywhere, and build your <strong>bright career.</strong></p>
                <button className="button-link">  <Link to="/courses" className="button-link">Start A Course</Link></button>
            </div>
            <div className="banner-image">
                <img src="../../../assets/images/3763028.jpg" alt="banner" />
            </div>
        </div >
    )
}

export default Banner
