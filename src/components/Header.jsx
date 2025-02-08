import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="logo">Atabey.</NavLink>

            <nav className="navbar">
                <NavLink to="/"
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                </NavLink>
                <NavLink to="/about"
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    About
                </NavLink>
                <NavLink to="/projects"
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Projects
                </NavLink>
                <NavLink to="/contact"
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header