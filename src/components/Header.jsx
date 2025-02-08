import React from 'react'

function Header() {
    return (
        <header className="header">
            <a href="#" className="logo">Atabey.</a>

            <nav className="navbar">
                <a href="#" className='active'>Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </nav>

        </header>
    )
}

export default Header