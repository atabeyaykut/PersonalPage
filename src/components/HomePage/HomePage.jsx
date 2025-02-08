import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

function HomePage() {
    return (
        <section className="h-screen bg-[url('/public/avatar.jpg')] bg-cover bg-center flex items-center px-[10%] home">
            <div className="max-w-[600px] home-content">
                <h1 className="relative text-[56px] font-bold leading-[1.2]">Hi, I'm Atabey AYKUT</h1>
                <h3 className="relative text-[32px] font-bold text-[#00abf0]">Frontend Developer</h3>
                <p className="relative text-base my-5 mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae est, quisquam, nobis quos fuga nemo sint voluptate vel, voluptas quam voluptates. Quaerat, nostrum! Eos asperiores sunt atque.</p>
                <div className="relative flex justify-between w-[345px] h-[50px] btn-box">
                    <a href="#" className="relative inline-flex justify-center items-center w-[150px] h-full bg-[#00abf0] border-2 border-[#00abf0] rounded-lg text-[19px] text-[#001c2a] no-underline font-semibold tracking-wider z-[1] overflow-hidden transition-all duration-500 hover:text-[#00abf0]">Hire Me</a>
                    <a href="#" className="relative inline-flex justify-center items-center w-[150px] h-full bg-transparent border-2 border-[#00abf0] rounded-lg text-[19px] text-[#00abf0] no-underline font-semibold tracking-wider z-[1] overflow-hidden transition-all duration-500 hover:text-[#001c2a]">Lets Talk</a>
                </div>
            </div>
            <div className="absolute bottom-10 w-[170px] flex justify-around home-sci">
                <a href="#" className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-[#00abf0] rounded-full text-xl text-[#00abf0] no-underline z-[1] overflow-hidden transition-all duration-500 hover:text-[#001c2a]"><FaGithub /></a>
                <a href="#" className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-[#00abf0] rounded-full text-xl text-[#00abf0] no-underline z-[1] overflow-hidden transition-all duration-500 hover:text-[#001c2a]"><TbBrandGithubFilled /></a>
                <a href="#" className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-[#00abf0] rounded-full text-xl text-[#00abf0] no-underline z-[1] overflow-hidden transition-all duration-500 hover:text-[#001c2a]"><FaLinkedinIn /></a>
            </div>
        </section>
    )
}

export default HomePage  