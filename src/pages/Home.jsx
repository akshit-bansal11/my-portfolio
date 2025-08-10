// Dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaCircle, FaGithub, FaLinkedinIn, FaDownload, FaXTwitter, FaHackerrank, FaPhone } from 'react-icons/fa6';
import { SiCplusplus, SiGmail, SiLeetcode, SiCoursera } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

// Components
import ScrollSection from '../components/common/sections/ScrollSection'
import NavButton from '../components/common/buttons/TextOnlyButton.jsx';
import ProjectCard from '../components/common/cards/ProjectCard.jsx';
import ExpItem from '../components/common/cards/ExpItem.jsx';
import EduItem from '../components/common/cards/EduItem.jsx';
import SkillSection from '../components/common/sections/SkillSection';
import Certificate from '../components/common/cards/Certificate.jsx';
import ScrollSectionHeading from '../components/common/headings/ScrollSectionHeading.jsx';

// Config
import { skills } from '../config/SkillsConfig.js';

// Images
import Pfp from '../assets/images/pfp.jpg'
import Inf from '../assets/projects/Websites/influera.png'
import Med from '../assets/projects/Websites/mediShare.png'

// Badges and Certificates
import cppBadge from '../assets/badges/cppBadge.png'
import cBadge from '../assets/badges/cBadge.png'
import ceisd from '../assets/certificates/ceisd.png'
import ceiga from '../assets/certificates/ceiga.png'
import sqlbhack from '../assets/certificates/sqlbhack.png'
import jsbhack from '../assets/certificates/jsbhack.png'
import cssbhack from '../assets/certificates/cssbhack.png'
import SkillBadge from '../components/common/cards/SkillBadge.jsx';

function Home() {
    return (
        <div className = "flex w-full flex-col lg:gap-10 md:gap-7 gap-4 items-center">

            <motion.div
                className="flex gap-1 items-center w-full lg:h-50 md:h-35 h-20 justify-center" // Center the container
            >
                <motion.div
                    className="lg:w-4xl w-full h-full flex items-end justify-between bg-neutral-400/10 lg:p-5 md:p-3 p-2 lg:rounded-l-2xl rounded-l-lg"
                >
                    <div className="flex lg:gap-4 md:gap-3 gap-1.5 h-full items-center">
                        <img src={Pfp} className="h-full rounded-sm md:rounded-lg lg:rounded-xl" alt="Profile" />
                        <div className="flex flex-col lg:gap-8 md:gap-5 gap-2justify-between">
                            <div>
                                <h1 className="lg:text-3xl md:text-xl text-[10px] text-white">AKSHIT BANSAL</h1>
                                <h2 className="lg:text-lg md:text-sm text-[8px] text-nowrap text-neutral-400">MERN-Stack Developer | UI, UX and Graphics Designer</h2>
                                <div className="flex lg:text-xl md:text-sm text-[8px] gap-1 text-neutral-400 items-center">
                                    <FaLocationDot className='lg:text-lg md:text-xs text-[6px]' />
                                    <p>Punjab, India</p>
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaCircle className="text-green-500 lg:text-[7px] md:text-[5px] text-[2px] drop-shadow-sm drop-shadow-green-500" />
                                <p className="text-neutral-400 lg:text-xs md:text-[10px] text-[5px]">Available for work</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:gap-4 md:gap-3 gap-2 text-nowrap'>
                        <motion.a
                            href="mailto:artistbansal2004@gmail.com"
                            target="_blank"
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white flex gap-1 items-center rounded-full lg:text-3xl md:text-xl text-[10px]"
                        >
                            <SiGmail />
                        </motion.a>
                        <motion.a
                            href="tel:+917009250361"
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white flex gap-1 items-center rounded-full lg:text-3xl md:text-xl text-[10px]"
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
                            className="text-white lg:text-xl md:text-sm text-[8px] flex gap-1 items-center bg-neutral-700 lg:px-4 px-2 lg:py-2 md:py-1 rounded-full transition-colors duration-300 hover:bg-amber-400 hover:text-neutral-800"
                        >
                            <FaDownload />
                            <p>Download CV</p>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Social Panel */}
                <motion.div
                    className="flex flex-col h-full lg:p-5 md:p-3 p-1.5 lg:rounded-r-2xl rounded-r-lg lg:text-xl md:text-lg text-[8px] bg-neutral-400/10 lg:gap-4 md:gap-2 gap-1.5 text-neutral-400"
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
            <ScrollSection id = 'about'>
                <ScrollSectionHeading heading="about me"/>
                <div className = "flex flex-col lg:text-lg md:text-sm text-[8px] gap-2 text-neutral-400">
                    <p>
                        Hi, I’m Akshit Bansal — a full-stack developer who enjoys building thoughtful, practical web experiences. I like solving real problems with clean, efficient code and turning ideas into things people can actually use.
                    </p>
                    <p>
                        I build full-stack apps using the MERN stack (MongoDB, Express, React, and Node.js). I’ve worked on projects that involve integrating third-party APIs, setting up authentication, managing state smoothly, and making sure everything looks good and works well across different devices.
                    </p>
                    <p>
                        I focus on writing clean, easy-to-maintain code and always look for ways to get better at what I do.
                    </p>
                </div>
            </ScrollSection>

            {/* Projects Section */}
            <ScrollSection id = 'projects'>
                <div className = "flex justify-between w-full">
                    <ScrollSectionHeading heading = "projects" />
                    <NavButton to = "/projects" >
                        <p>See More</p>                 
                        <GoArrowUpRight />    
                    </NavButton>
                </div>
                <div className='flex lg:flex-row flex-col gap-2 lg:justify-around justify-center items-center'>
                    <ProjectCard
                        title = 'Medishare'
                        description = 'MediShare is a donation-based platform that connects medicine donors with people in need through a secure and verified system.'
                        image = {Med}
                        techStack = {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'Gemini API']}
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
            <ScrollSection id = 'experience'>
                <ScrollSectionHeading heading = "experience" />
                <div className='flex flex-col gap-2'>
                    <h1 className = "lg:text-2xl md:text-lg text-[8px] text-neutral-400">Internship</h1>
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
                    <h1 className = "lg:text-2xl md:text-lg text-[8px] text-neutral-400">Training</h1>
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
            <ScrollSection id = 'skills'>
                <ScrollSectionHeading heading = "skills" />
                <div className='flex flex-col gap-2'>
                    {skills.map((section, index) => (
                        <SkillSection key={index} title={section.title} skills={section.skills} />
                    ))}
                </div>
            </ScrollSection>

            {/* Achievments & Certifications Sections */}
            <ScrollSection id = 'certif'>
                <ScrollSectionHeading heading = "certifications & achievements" />
                <div className='flex flex-col gap-4'>
                    <h1 className='lg:text-xl md:text-sm text-xs text-neutral-400'>Achievements</h1>
                    <div className='flex gap-4'>
                        <SkillBadge name='C++' icon = {<SiCplusplus />} stars = {5}/>
                        <SkillBadge name='C' icon = {<SiCoursera />} stars = {2}/>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='lg:text-xl md:text-sm text-xs text-neutral-400'>Certifications</h1>
                    <div className='grid grid-cols-3 gap-4'>
                        <Certificate certificate={ceisd} link="a.com"/>
                        <Certificate certificate={ceiga} link="a.com"/>
                        <Certificate certificate={sqlbhack} link="a.com"/>
                        <Certificate certificate={jsbhack} link="a.com"/>
                        <Certificate certificate={cssbhack} link="a.com"/>
                    </div>
                </div>
            </ScrollSection>

            {/* Education Section */}
            <ScrollSection id = 'education'>
                <ScrollSectionHeading heading = "education" />
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