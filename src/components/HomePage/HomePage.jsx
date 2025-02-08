import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

function HomePage() {
    return (
        <section className="home">
            <div className="hom-content">
                <h1>Hi, I'm Atabey AYKUT</h1>
                <h3>Frontend Developer</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae est, quisquam, nobis quos fuga nemo sint voluptate vel, voluptas quam voluptates. Quaerat, nostrum! Eos asperiores sunt atque.</p>
                <div className="btn-box">
                    <a href="#">Hire Me</a>
                    <a href="#">Lets Talk</a>
                </div>
            </div>
            <div className="home-sci">
                <a href="#"><FaGithub /></a>
                <a href="#"><TbBrandGithubFilled /></a>
                <a href="#"><FaLinkedinIn /></a>
            </div>
        </section>
    )
}

export default HomePage  