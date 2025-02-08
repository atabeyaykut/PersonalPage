import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function HomePage() {
    return (
        <main className="home page-transition">
            <article className="home-content">
                <h1>Hi, I'm Atabey AYKUT</h1>
                <h2 className="h3">Frontend Developer</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae est, quisquam, nobis quos fuga nemo sint voluptate vel, voluptas quam voluptates. Quaerat, nostrum! Eos asperiores sunt atque.</p>
                <nav className="btn-box">
                    <a href="#contact" aria-label="Hire Me">Hire Me</a>
                    <a href="#contact" aria-label="Let's Talk">Lets Talk</a>
                </nav>
            </article>
            <nav className="home-sci">
                <a href="https://github.com/atabeyaykut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/atabeyaykut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile">
                    <FaLinkedinIn />
                </a>
            </nav>
        </main>
    )
}

export default HomePage