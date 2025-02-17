import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from 'framer-motion';

function HomePage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="home page-transition"
        >
            <motion.article 
                variants={itemVariants}
                className="home-content"
            >
                <motion.h1 variants={itemVariants}>
                    Hi, I'm Atabey AYKUT
                </motion.h1>
                
                <motion.h2 variants={itemVariants}>
                    Frontend Developer
                </motion.h2>
                
                <motion.p variants={itemVariants}>
                    I am a Physics Engineering graduate with a passion for web development. 
                    Skilled in HTML, CSS, JavaScript, React, and Java, I specialize in building 
                    component-based structures, state management, and DOM manipulation.
                    <br /><br />
                    With experience in front-end development and software engineering, I strive 
                    to create user-friendly, high-performance, and scalable solutions. I'm eager 
                    to contribute as a Front-End Developer with a problem-solving mindset and a 
                    strong team spirit. Looking forward to collaborating!
                </motion.p>
                
                <motion.nav 
                    variants={itemVariants}
                    className="btn-box"
                >
                    <a 
                        href="#contact" 
                        aria-label="Hire Me"
                        className="hover:bg-[#00abf0]/20 transition-colors duration-300"
                    >
                        Hire Me
                    </a>
                    <a 
                        href="#contact" 
                        aria-label="Let's Talk"
                        className="hover:bg-[#00abf0]/20 transition-colors duration-300"
                    >
                        Let's Talk
                    </a>
                </motion.nav>
            </motion.article>

            <motion.nav 
                variants={itemVariants}
                className="home-sci"
            >
                <a 
                    href="https://github.com/atabeyaykut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hover:text-[#00abf0] transition-colors duration-300"
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://www.linkedin.com/in/atabeyaykut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="hover:text-[#00abf0] transition-colors duration-300"
                >
                    <FaLinkedinIn />
                </a>
            </motion.nav>
        </motion.main>
    );
}

export default HomePage;