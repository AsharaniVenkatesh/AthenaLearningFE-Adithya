import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <h1><Link to="/" >Athena Learning</Link></h1>
            </div>
            <div className="link-div">
                <ul>
                   
                    <li className="link get-started"><Link to="/login" >Login / Signup</Link></li>
                    <Link to="/appt">Appointments</Link>
                </ul>

                {/* <a href="/" className="link">Courses</a>
                <a href="/" className="link">Login</a>
                <button className="get-started link">Signup</button> */}
            </div>

        </div>
    )
}

export default Header
