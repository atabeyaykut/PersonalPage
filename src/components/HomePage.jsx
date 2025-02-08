import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function HomePage() {
    return (
        <main className="home page-transition">
            <article className="home-content">
                <h1>Hi, I'm Atabey AYKUT</h1>
                <h2>Frontend Developer</h2>
                <p>I am a Physics Engineering graduate with a passion for web development. Skilled in HTML, CSS, JavaScript, React, and Java, I specialize in building component-based structures, state management, and DOM manipulation.

                    With experience in front-end development and software engineering, I strive to create user-friendly, high-performance, and scalable solutions. I’m eager to contribute as a Front-End Developer with a problem-solving mindset and a strong team spirit. Looking forward to collaborating!</p>
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