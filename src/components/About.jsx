import React from 'react';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="about page-transition min-h-screen flex flex-col justify-center py-20 px-6 bg-gradient-to-b from-[#01111b] to-[#011824]"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    variants={itemVariants}
                    className="text-5xl font-bold text-center mb-12"
                >
                    About <span className="text-primary">Atabey AYKUT</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-primary">Professional Journey</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I am a Physics Engineering graduate from Hacettepe University who transformed my passion for technology into a career in web development. My academic background instilled a strong analytical mindset and keen attention to detail.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Currently, I serve as a Frontend Developer at QuantumCode Apps, where I build and maintain responsive, high-performance web applications. I work closely with UI/UX designers to craft user-centric and visually engaging interfaces.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            My journey also includes an intensive training as a Frontend Development Trainee at Work�ntech Inc., completing over 480 hours of practical learning in technologies like HTML, CSS, JavaScript, React, and Redux.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-primary">Technical Expertise</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#011f2e] p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaCode className="text-primary text-xl" />
                                    <h4 className="text-lg font-semibold">Frontend Development</h4>
                                </div>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• React.js</li>
                                    <li>• JavaScript (ES6+)</li>
                                    <li>• HTML5 &amp; CSS3</li>
                                    <li>• Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="bg-[#011f2e] p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaDatabase className="text-primary text-xl" />
                                    <h4 className="text-lg font-semibold">Backend Knowledge</h4>
                                </div>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• Java &amp; SpringBoot</li>
                                    <li>• REST APIs</li>
                                    <li>• Database Management</li>
                                    <li>• MySQL, PostgreSQL, MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2 space-y-6 ">
                        <h3 className="text-2xl font-semibold text-primary">Tools &amp; Technologies</h3>
                        <div className="bg-[#011f2e] px-8 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <FaTools className="text-primary text-xl" />
                                <h4 className="text-lg font-semibold">Development Tools</h4>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-gray-300">
                                    <h5 className="font-semibold mb-2">Version Control</h5>
                                    <ul className="space-y-1">
                                        <li>• Git</li>
                                        <li>• GitHub</li>
                                    </ul>
                                </div>
                                <div className="text-gray-300">
                                    <h5 className="font-semibold mb-2">Design</h5>
                                    <ul className="space-y-1">
                                        <li>• Figma</li>
                                    </ul>
                                </div>
                                <div className="text-gray-300">
                                    <h5 className="font-semibold mb-2">Testing</h5>
                                    <ul className="space-y-1">
                                        <li>• Jest</li>
                                        <li>• Cypress</li>
                                        <li>• Selenium</li>
                                    </ul>
                                </div>
                                <div className="text-gray-300">
                                    <h5 className="font-semibold mb-2">Other</h5>
                                    <ul className="space-y-1">
                                        <li>• VS Code</li>
                                        <li>• npm/yarn</li>
                                        <li>• Postman</li>
                                        <li>• Vercel, Vite</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-primary mb-6">What I Bring to the Table</h3>
                    <ul className="grid md:grid-cols-3 gap-6">
                        <motion.li
                            variants={itemVariants}
                            className="bg-[#011f2d] p-6 rounded-lg"
                        >
                            <h4 className="text-xl font-medium mb-2">Analytical Problem Solving</h4>
                            <p className="text-gray-300">Leveraging my engineering background to develop innovative, efficient solutions.</p>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            className="bg-[#011f2d] p-6 rounded-lg"
                        >
                            <h4 className="text-xl font-medium mb-2">Effective Team Collaboration</h4>
                            <p className="text-gray-300">Strong communication and teamwork skills that drive successful project outcomes.</p>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            className="bg-[#011f2d] p-6 rounded-lg"
                        >
                            <h4 className="text-xl font-medium mb-2">Commitment to Continuous Learning</h4>
                            <p className="text-gray-300">Dedicated to mastering new technologies and continuously improving my skill set.</p>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;
