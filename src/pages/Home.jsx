// Dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaCircle, FaGithub, FaLinkedinIn, FaDownload, FaXTwitter, FaHackerrank, FaPhone } from 'react-icons/fa6';
import { SiGmail, SiLeetcode } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

// Components
import ScrollSection from '../components/common/ScrollSection'
import NavButton from '../components/common/NavButton';
import ProjectCard from '../components/common/ProjectCard';
import ExpItem from '../components/common/ExpItem';
import EduItem from '../components/common/EduItem';
import SkillSection from '../components/common/SkillSection';

// Config
import { skills } from '../config/SkillsConfig.js';

// Images
import Pfp from '../assets/images/pfp.jpg'
import Inf from '../assets/projects/websites/influera.png'
import Med from '../assets/projects/websites/medishare.png'

// Badges and Certificates
import cppBadge from '../assets/badges/cppBadge.png'
import cBadge from '../assets/badges/cBadge.png'
import ceisd from '../assets/certificates/ceisd.png'
import ceiga from '../assets/certificates/ceiga.png'
import sqlbhack from '../assets/certificates/sqlbhack.png'
import jsbhack from '../assets/certificates/jsbhack.png'
import cssbhack from '../assets/certificates/cssbhack.png'

// SVG Icons
import gmailIcon from '../assets/icons/gmail.svg';

function Home() {
    return (
        <div className = "flex flex-col gap-10 items-center">

            <motion.div
            className="flex gap-1 items-center h-50 justify-center" // Center the container
            whileHover="hovered"
            initial="initial"
            >
                <motion.div
                    variants={{
                        initial: {
                            x: 30, // Centered initially
                            borderTopRightRadius: '1rem',
                            borderBottomRightRadius: '1rem',
                        },
                        hovered: {
                            x: 0, // Slide left when hovered
                            borderTopRightRadius: '0rem',
                            borderBottomRightRadius: '0rem',
                        },
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-4xl h-full flex items-end justify-between bg-neutral-800 p-5 rounded-2xl"
                >
                    <div className="flex gap-4">
                        <img src={Pfp} className="w-40 h-auto" alt="Profile" />
                        <div className="flex flex-col justify-between my-2">
                            <div>
                                <h1 className="text-3xl text-white font-sans">Akshit Bansal</h1>
                                <h2 className="text-lg text-neutral-400 font-sans">MERN-Stack Developer | UI, UX and Graphics Designer</h2>
                                <div className="flex gap-1 text-neutral-400 items-center">
                                    <FaLocationDot />
                                    <p>Punjab, India</p>
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaCircle className="text-green-500 text-[7px] drop-shadow-sm drop-shadow-green-500" />
                                <p className="text-neutral-400 text-xs">Available for work</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 text-nowrap'>
                        <motion.a
                            href="mailto:artistbansal2004@gmail.com"
                            target="_blank"
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white flex gap-1 items-center rounded-full text-3xl"
                        >
                            <SiGmail />
                        </motion.a>
                        <motion.a
                            href="tel:+917009250361"
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white flex gap-1 items-center rounded-full text-2xl"
                        >
                            <FaPhone />
                        </motion.a>
                        <motion.a
                            href=""
                            download={true}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white flex gap-1 items-center bg-neutral-700 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-amber-400 hover:text-neutral-800"
                        >
                            <FaDownload />
                            <p>Download CV</p>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Social Panel */}
                <motion.div
                    variants={{
                        initial: { x: 0, opacity: 0 }, // Start off-screen to the right
                        hovered: { x: 0, opacity: 1 }, // Slide in when hovered
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full p-5 rounded-r-2xl text-xl bg-neutral-800 gap-4 text-neutral-400"
                >
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/akshit-bansal11">
                        <FaGithub className='hover:text-white' />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akshit-bansal11/">
                        <FaLinkedinIn className='hover:text-sky-600' />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="http://hackerrank.com/profile/akshitbansal11">
                        <FaHackerrank className='hover:text-green-500' />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/akshit_bansal11">
                        <FaXTwitter className='hover:text-white' />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/akshit-bansal11/">
                        <SiLeetcode className='hover:text-amber-400' />
                    </a>
                </motion.div>
            </motion.div>

            {/* About Section */}
            <ScrollSection id = 'about' className = "flex flex-col gap-2 bg-neutral-800 p-5 rounded-2xl">
                <h1 className = "text-2xl mb-3 text-white">About Me</h1>
                <div className = "flex flex-col text-pretty gap-2 text-neutral-300">
                    <p>
                        Hello, I’m Akshit Bansal — a passionate and detail-oriented full-stack developer with a strong foundation in web technologies and a drive to create meaningful digital experiences. I enjoy turning complex problems into elegant, user-friendly solutions.
                    </p>
                    <p>
                        I specialize in building full-stack applications using the MERN stack (MongoDB, Express, React, Node.js), and have hands-on experience integrating third-party APIs, handling authentication, managing state efficiently, and ensuring responsive, accessible design.
                    </p>
                    <p>
                        I take pride in writing clean, maintainable code and continuously improving my skills.
                    </p>
                </div>
            </ScrollSection>

            {/* Projects Section */}
            <ScrollSection id = 'projects' className = "flex flex-col gap-2 bg-neutral-800 p-5 rounded-2xl w-full">
                <div className = "flex justify-between w-full">
                    <h1 className = "text-2xl mb-3 text-white">Some Of My Projects</h1>
                    <NavButton to = "/projects" >
                        <p>See More</p>                 
                        <GoArrowUpRight />    
                    </NavButton>
                </div>
                <div className='flex gap-20 p-10 justify-evenly'>
                    <ProjectCard
                        title = 'Medishare'
                        description = 'MediShare is a donation-based platform that connects medicine donors with people in need through a secure and verified system.'
                        image = {Med}
                        techStack = {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'Gemini API', 'React Icons', 'Framer Motion', 'React Router DOM']}
                    />
                    <ProjectCard
                        title="Influera"
                        description="A website made to facilitate the collaboration between small-time influencers and potential investors and clients."
                        image={Inf}
                        techStack={['Node.js', 'Express', 'HTML', 'CSS', 'JavaScript', 'Cloudinary', 'Font Awesome']}
                        demoLink="https://influera.onrender.com/"
                        githubLink="https://github.com/akshit-bansal11/Influera"
                    />
                </div>
            </ScrollSection>

            {/* Experience Section */}
            <ScrollSection id = 'experience' className='flex flex-col gap-4 bg-neutral-800 rounded-2xl p-8 w-full '>
                <div className = "flex justify-between w-full">
                    <h1 className = "text-2xl mb-3 text-white">Experience</h1>
                </div>
                <div>
                    <div className = "flex justify-between w-full">
                        <h1 className = "text-lg mb-3 text-white">Internship</h1>
                    </div>
                    <ExpItem
                        location= 'Remote'
                        company = 'Bluestock Fintech'
                        role = 'Software Development Engineer Intern'
                        date = 'Oct 2024 - Nov 2024'
                        points = {[
                            "Developed an IPO Dashboard, a full-stack web application for tracking IPOs.",
                            "Implemented real-time IPO listings, user portfolio management, and financial analytics.",
                            "Used Node.js, Express.js, MySQL, and frontend frameworks for seamless user experience",
                        ]}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className = "flex justify-between w-full">
                        <h1 className = "text-lg mb-3 text-white">Training</h1>
                    </div>
                    <ExpItem
                        location= 'Punjab, India'
                        company = 'Bangalore Computer Education'
                        role = 'MERN Stack Development + AI Integration Training'
                        date = 'June 2025 - Aug 2025'
                        points = {[
                            "MongoDB, Express.js, React.js, Node.js, Gemini API, Redux Toolkit, and Tailwind CSS.",
                            "Developed a full-stack web application with AI integration for enhanced user experience.",
                            "Focused on building scalable, maintainable, and efficient web applications.",
                        ]}
                    />
                    <ExpItem
                        location= 'Punjab, India'
                        company = 'Bangalore Computer Education'
                        role = 'Data Structures and Algorithms Training'
                        date = 'Dec 2024 - Mar 2025'
                        points = {[
                            "In-depth training in data structures and algorithms, focusing on problem-solving skills.",
                            "Covered topics such as arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming.",
                            "Emphasized practical applications and coding challenges to enhance algorithmic thinking.",
                        ]}
                    />
                    <ExpItem
                        location= 'Punjab, India'
                        company = 'Bangalore Computer Education'
                        role = 'NodeJS Full Stack Development Training'
                        date = 'June 2024 - July 2024'
                        points = {[
                            "Comprehensive training in Node.js for full-stack development.",
                            "Learned to build RESTful APIs, manage databases, and create dynamic web applications.",
                            "Focused on best practices in backend development, including security and performance optimization.",
                        ]}
                    />
                </div>
            </ScrollSection>

            {/* Skills Sections */}
            <ScrollSection id = 'skills' className='flex flex-col gap-2 bg-neutral-800 rounded-2xl p-8 w-full '>
                <div className = "flex justify-between w-full">
                    <h1 className = "text-2xl mb-3 text-white">Skills</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    {skills.map((section, index) => (
                        <SkillSection key={index} title={section.title} skills={section.skills} />
                    ))}
                </div>
            </ScrollSection>

            {/* Achievments & Certifications Sections */}
            <ScrollSection id = 'certif' className='flex flex-col gap-8 bg-neutral-800 rounded-2xl p-8 w-full '>
                <div className = "flex justify-between w-full">
                    <h1 className = "text-2xl mb-3 text-white">Achievements & Certifications</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl text-neutral-400'>Achievements</h1>
                    <div className='flex gap-4'>
                        <motion.img whileHover={{scale: 2, translateX: 50}} className='w-20' src={cppBadge} alt="" />
                        <motion.img whileHover={{scale: 2, translateX: 50}} className='w-20' src={cBadge} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl text-neutral-400'>Certifications</h1>
                    <div className='grid grid-cols-3 gap-4'>
                        <motion.img initial = {{opacity: 0.5, zIndex: 0}} whileHover = {{scale: 2, opacity: 1, zIndex: 2}} className='rounded-2xl' src={ceisd} alt="" />
                        <motion.img initial = {{opacity: 0.5, zIndex: 0}} whileHover = {{scale: 2, opacity: 1, zIndex: 2}} className='rounded-2xl' src={ceiga} alt="" />
                        <motion.img initial = {{opacity: 0.5, zIndex: 0}} whileHover = {{scale: 2, opacity: 1, zIndex: 2}} className='rounded-2xl' src={sqlbhack} alt="" />
                        <motion.img initial = {{opacity: 0.5, zIndex: 0}} whileHover = {{scale: 2, opacity: 1, zIndex: 2}} className='rounded-2xl' src={jsbhack} alt="" />
                        <motion.img initial = {{opacity: 0.5, zIndex: 0}} whileHover = {{scale: 2, opacity: 1, zIndex: 2}} className='rounded-2xl' src={cssbhack} alt="" />
                    </div>
                </div>
            </ScrollSection>

            {/* Education Section */}
            <ScrollSection id = 'education' className='flex flex-col gap-2 bg-neutral-800 rounded-2xl p-8 w-full '>
                <div className = "flex justify-between w-full">
                    <h1 className = "text-2xl mb-3 text-white">Education</h1>
                </div>
                <EduItem
                    location= 'Punjab, India'
                    company = 'Maharaja Ranjit Singh Punjab Technical University'
                    role = 'Bachelor of Technology in Computer Science & Engineering'
                    date = '2022 - Ongoing'
                />
                <EduItem
                    location= 'Punjab, India'
                    company = 'Central Board of Secondary Education'
                    role = 'Senior Secondary Schooling'
                    date = '2021 - 2022'
                />
                <EduItem
                    location= 'Punjab, India'
                    company = 'Central Board of Secondary Education'
                    role = 'Metriculation'
                    date = '2019 - 2020'
                />
            </ScrollSection>
        </div>
    )
}

export default Home