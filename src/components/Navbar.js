import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand mx-3" to="/">
                    Rahul Shinde
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link" aria-current="page" to="/">About me</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link" to="/education">Education</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/projects" className='nav-link'>Projects</NavLink>
                        </li>
                        <li className="nav- mx-3">
                            <NavLink to="/achievements" className='nav-link'>Achievements</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/contactme" className='nav-link'>Contact me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar       