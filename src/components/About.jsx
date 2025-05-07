import React from 'react';
import { FaCode, FaDatabase, FaTools, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const certificates = [
        {
            name: "Front End Developer",
            issuer: "Workintech",
            path: "public/certificates/frontend_developer_certificate-en.pdf",
        },
        {
            name: "Full Stack Developer",
            issuer: "Workintech",
            path: "public/certificates/fullstack_developer_certificate.pdf",
        },
        {
            name: "Front End Developer (React)",
            issuer: "HackerRank",
            path: "public/certificates/frontend_developer_react certificate.pdf",
        },
        { name: "Java (Basic)", issuer: "HackerRank", path: "public/certificates/java_basic certificate.pdf" },
        { name: "JavaScript (Basic)", issuer: "HackerRank", path: "public/certificates/javascript_basic certificate.pdf" },
        {
            name: "JavaScript (Intermediate)",
            issuer: "HackerRank",
            path: "public/certificates/javascript_intermediate certificate.pdf",
        },
        { name: "Node.js (Basic)", issuer: "HackerRank", path: "public/certificates/nodejs_basic certificate.pdf" },
        {
            name: "Problem Solving (Basic)",
            issuer: "HackerRank",
            path: "public/certificates/problem_solving_basic certificate.pdf",
        },
        {
            name: "Problem Solving (Intermediate)",
            issuer: "HackerRank",
            path: "public/certificates/problem_solving_intermediate certificate.pdf",
        },
        {
            name: "Rest API (Intermediate)",
            issuer: "HackerRank",
            path: "public/certificates/rest_api_intermediate certificate.pdf",
        },
        { name: "React (Basic)", issuer: "HackerRank", path: "public/certificates/react_basic certificate.pdf" },
    ];

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="about page-transition min-h-screen flex flex-col justify-center py-20 px-6 bg-gradient-to-b from-[#01111b] to-[#011824]"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2 variants={itemVariants} className="text-5xl font-bold text-center mb-12">
                    About <span className="text-[#00abf0]">Atabey AYKUT</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-primary">Professional Journey</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I am a Physics Engineering graduate from Hacettepe University who transformed my passion for technology
                            into a career in web development. My academic background instilled a strong analytical mindset and keen
                            attention to detail.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Currently, I serve as a Frontend Developer at QuantumCode Apps, where I build and maintain responsive,
                            high-performance web applications. I work closely with UI/UX designers to craft user-centric and visually
                            engaging interfaces.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            My journey also includes an intensive training as a Frontend Development Trainee at Workintech Inc.,
                            completing over 480 hours of practical learning in technologies like HTML, CSS, JavaScript, React, and
                            Redux.
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
                        <motion.li variants={itemVariants} className="bg-[#011f2d] p-6 rounded-lg">
                            <h4 className="text-xl font-medium mb-2">Analytical Problem Solving</h4>
                            <p className="text-gray-300">
                                Leveraging my engineering background to develop innovative, efficient solutions.
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants} className="bg-[#011f2d] p-6 rounded-lg">
                            <h4 className="text-xl font-medium mb-2">Effective Team Collaboration</h4>
                            <p className="text-gray-300">
                                Strong communication and teamwork skills that drive successful project outcomes.
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants} className="bg-[#011f2d] p-6 rounded-lg">
                            <h4 className="text-xl font-medium mb-2">Commitment to Continuous Learning</h4>
                            <p className="text-gray-300">
                                Dedicated to mastering new technologies and continuously improving my skill set.
                            </p>
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Certificates Section */}
                <motion.div variants={itemVariants} className="mt-16 space-y-6">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <FaCertificate className="text-[#00abf0] text-3xl" />
                        <h3 className="text-2xl font-semibold text-primary text-center">Certificates</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#011f2e] rounded-lg overflow-hidden shadow-lg border border-[#01293d] transition-all duration-300 h-full"
                            >
                                <a
                                    href={cert.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col h-full p-4 text-gray-200 hover:text-[#00abf0] transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-[#011f2e] bg-opacity-10 p-2 rounded-full flex-shrink-0">
                                            <FaCertificate className="text-[#00abf0] text-xl" />
                                        </div>
                                        <h4 className="font-medium text-base line-clamp-1">{cert.name}</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                                    <div className="mt-auto flex items-center gap-2 text-[#00abf0] text-sm justify-end">
                                        <span className="hidden sm:inline">View</span>
                                        <FaExternalLinkAlt className="text-xs" />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;