import React from 'react'

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full px-[10%] py-5 bg-transparent flex justify-between items-center z-100">
            <a href="#" className="relative text-[25px] text-[#ededed] no-underline font-semibold logo">Atabey.</a>

            <nav className="navbar">
                <a href="#" className='text-lg text-[#ededed] no-underline font-medium ml-[35px] hover:text-[#00abf0] active'>Home</a>
                <a href="#" className='text-lg text-[#ededed] no-underline font-medium ml-[35px] hover:text-[#00abf0]'>About</a>
                <a href="#" className='text-lg text-[#ededed] no-underline font-medium ml-[35px] hover:text-[#00abf0]'>Services</a>
                <a href="#" className='text-lg text-[#ededed] no-underline font-medium ml-[35px] hover:text-[#00abf0]'>Portfolio</a>
                <a href="#" className='text-lg text-[#ededed] no-underline font-medium ml-[35px] hover:text-[#00abf0]'>Contact</a>
            </nav>
        </header>
    )
}

export default Header