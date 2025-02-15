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
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-primary">Professional Journey</h3>
                        <p className="text-gray-300 leading-relaxed">
                            As a Physics Engineering graduate turned Frontend Developer, I bring a unique analytical perspective to web development. My engineering background has equipped me with strong problem-solving skills and attention to detail, which I now apply to creating exceptional user experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With a deep passion for web technologies, I specialize in building modern, responsive web applications. My expertise spans across React.js, Next.js, and various frontend frameworks, allowing me to create seamless and engaging user interfaces.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I believe in continuous learning and staying up-to-date with the latest web development trends and best practices. This commitment helps me deliver cutting-edge solutions that meet both user needs and business objectives.
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
                                    <li>• React.js & Next.js</li>
                                    <li>• JavaScript/TypeScript</li>
                                    <li>• HTML5 & CSS3</li>
                                    <li>• Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="bg-[#011f2e] p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaDatabase className="text-primary text-xl" />
                                    <h4 className="text-lg font-semibold">Backend Knowledge</h4>
                                </div>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• Node.js</li>
                                    <li>• RESTful APIs</li>
                                    <li>• Database Management</li>
                                    <li>• Server Integration</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
                        <h3 className="text-2xl font-semibold text-primary">Tools & Technologies</h3>
                        <div className="bg-[#011f2e] p-4 rounded-lg">
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
                                        <li>• Adobe XD</li>
                                    </ul>
                                </div>
                                <div className="text-gray-300">
                                    <h5 className="font-semibold mb-2">Testing</h5>
                                    <ul className="space-y-1">
                                        <li>• Jest</li>
                                        <li>• React Testing Library</li>
                                    </ul>
                                </div>
                                <div className="text-gray-300">
                                    <h5 className="font-semibold mb-2">Other</h5>
                                    <ul className="space-y-1">
                                        <li>• VS Code</li>
                                        <li>• npm/yarn</li>
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
                            <h4 className="text-xl font-medium mb-2">Problem Solving</h4>
                            <p className="text-gray-300">Analytical thinking and creative solutions to complex challenges</p>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            className="bg-[#011f2d] p-6 rounded-lg"
                        >
                            <h4 className="text-xl font-medium mb-2">Team Collaboration</h4>
                            <p className="text-gray-300">Strong communication and adaptability in team environments</p>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            className="bg-[#011f2d] p-6 rounded-lg"
                        >
                            <h4 className="text-xl font-medium mb-2">Continuous Learning</h4>
                            <p className="text-gray-300">Always eager to learn new technologies and improve skills</p>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;