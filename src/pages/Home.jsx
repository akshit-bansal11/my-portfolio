// ──────────────────────────────────────────────
// Dependencies
// ──────────────────────────────────────────────
import React from 'react';
import { motion } from 'framer-motion';

// ──────────────────────────────────────────────
// Icons
// ──────────────────────────────────────────────
import {
    FaLocationDot, FaCircle, FaGithub, FaLinkedinIn,
    FaDownload, FaXTwitter, FaHackerrank, FaPhone
} from 'react-icons/fa6';
import { SiCplusplus, SiGmail, SiLeetcode, SiCoursera } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

// ──────────────────────────────────────────────
// Components
// ──────────────────────────────────────────────
import ScrollSection from '../components/common/sections/ScrollSection';
import NavButton from '../components/common/buttons/TextOnlyButton.jsx';
import ProjectCard from '../components/common/cards/ProjectCard.jsx';
import ExpItem from '../components/common/cards/ExpItem.jsx';
import EduItem from '../components/common/cards/EduItem.jsx';
import SkillSection from '../components/common/sections/SkillSection';
import Certificate from '../components/common/cards/Certificate.jsx';
import ScrollSectionHeading from '../components/common/headings/ScrollSectionHeading.jsx';
import SkillBadge from '../components/common/cards/SkillBadge.jsx';

// ──────────────────────────────────────────────
// Config
// ──────────────────────────────────────────────
import { skills } from '../config/SkillsConfig.js';

// ──────────────────────────────────────────────
// Assets
// ──────────────────────────────────────────────
import Pfp from '../assets/images/pfp.webp';
import Inf from '../assets/projects/Websites/influera.webp';
import Med from '../assets/projects/Websites/mediShare.webp';

// Badges & Certificates
import ceisd from '../assets/certificates/ceisd.webp';
import ceiga from '../assets/certificates/ceiga.webp';
import sqlbhack from '../assets/certificates/sqlbhack.webp';
import jsbhack from '../assets/certificates/jsbhack.webp';
import cssbhack from '../assets/certificates/cssbhack.webp';

function ProfileHeader() {
    return (
        <motion.div className="flex items-center justify-center w-full gap-1 lg:h-50 md:h-35 h-20">
            {/* Left Panel */}
            <motion.div
                className="flex items-end justify-between w-full h-full 
                    bg-neutral-400/10 lg:bg-neutral-600/20 
                    backdrop-blur-[3px] lg:backdrop-blur-[1px]
                    p-2 md:p-3 lg:p-5
                    rounded-l-lg lg:rounded-l-2xl"
            >
                {/* Profile Info */}
                <div className="flex items-center h-full gap-1.5 md:gap-3 lg:gap-4">
                    <img
                        src={Pfp}
                        alt="Profile"
                        className="h-full rounded-sm md:rounded-lg lg:rounded-xl"
                    />
                    <div className="flex flex-col justify-between gap-2 md:gap-5 lg:gap-8">
                        <div>
                            <h1 className="text-white text-[10px] md:text-xl lg:text-3xl">
                                AKSHIT BANSAL
                            </h1>
                            <h2 className="text-neutral-400 text-nowrap text-[8px] md:text-sm lg:text-lg">
                                MERN-Stack Developer | UI, UX and Graphics Designer
                            </h2>
                            <div className="flex items-center gap-1 text-neutral-400 text-[8px] md:text-sm lg:text-xl">
                                <FaLocationDot className="text-[6px] md:text-xs lg:text-lg" />
                                <p>Punjab, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaCircle className="text-green-500 drop-shadow-sm drop-shadow-green-500 text-[2px] md:text-[5px] lg:text-[7px]" />
                            <p className="text-neutral-400 text-[5px] md:text-[10px] lg:text-xs">
                                Available for work
                            </p>
                        </div>
                    </div>
                </div>
                {/* Contact Buttons */}
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4 text-nowrap">
                    <motion.a
                        href="mailto:artistbansal2004@gmail.com"
                        target="_blank"
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-white text-[10px] md:text-xl lg:text-3xl"
                    >
                        <SiGmail />
                    </motion.a>
                    <motion.a
                        href="tel:+917009250361"
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-white text-[10px] md:text-xl lg:text-3xl"
                    >
                        <FaPhone />
                    </motion.a>
                    <motion.a
                        href=""
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-2 lg:px-4 py-1 md:py-1 lg:py-2 
                            text-white text-[8px] md:text-sm lg:text-xl
                            rounded-full bg-neutral-700 
                            transition-colors duration-300 
                            hover:bg-amber-400 hover:text-neutral-800"
                    >
                        <FaDownload />
                        <p>Download CV</p>
                    </motion.a>
                </div>
            </motion.div>
            {/* Right Social Panel */}
            <motion.div
                className="flex flex-col h-full 
                    bg-neutral-400/10 lg:bg-neutral-600/20
                    backdrop-blur-[3px] lg:backdrop-blur-[1px] 
                    p-1.5 md:p-3 lg:p-5
                    gap-1.5 md:gap-2 lg:gap-4
                    rounded-r-lg lg:rounded-r-2xl
                    text-[8px] md:text-lg lg:text-xl 
                    text-neutral-400"
            >
                <a href="https://github.com/akshit-bansal11" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/akshit-bansal11/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hover:text-sky-600" />
                </a>
                <a href="http://hackerrank.com/profile/akshitbansal11" target="_blank" rel="noopener noreferrer">
                    <FaHackerrank className="hover:text-green-500" />
                </a>
                <a href="https://x.com/akshit_bansal11" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="hover:text-white" />
                </a>
                <a href="https://leetcode.com/u/akshit-bansal11/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="hover:text-amber-400" />
                </a>
            </motion.div>
        </motion.div>
    );
}

function AboutSection() {
    return (
        <ScrollSection id="about">
            <ScrollSectionHeading heading="about me" />
            <div className="flex flex-col gap-2 text-white lg:text-neutral-400 text-[8px] md:text-sm lg:text-lg">
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
    );
}

function ProjectsSection() {
    return (
        <ScrollSection id="projects">
            <div className="flex justify-between w-full">
                <ScrollSectionHeading heading="projects" />
                <NavButton to="/projects">
                    <p>See More</p>
                    <GoArrowUpRight />
                </NavButton>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-around">
                <ProjectCard
                    title="Medishare"
                    description="MediShare is a donation-based platform that connects medicine donors with people in need through a secure and verified system."
                    image={Med}
                    techStack={['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'Gemini API']}
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
    );
}

function ExperienceSection() {
    return (
        <ScrollSection id="experience">
            <ScrollSectionHeading heading="experience" />
            <div className="flex flex-col gap-2">
                <h1 className="text-neutral-400 text-[8px] md:text-lg lg:text-2xl">Internship</h1>
                <ExpItem
                    location="Remote"
                    company="Bluestock Fintech"
                    role="Software Development Engineer Intern"
                    date="Oct 2024 - Nov 2024"
                    points={[
                        "Developed an IPO Dashboard, a full-stack web application for tracking IPOs.",
                        "Implemented real-time IPO listings, user portfolio management, and financial analytics.",
                        "Used Node.js, Express.js, MySQL, and frontend frameworks for seamless user experience",
                    ]}
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-neutral-400 text-[8px] md:text-lg lg:text-2xl">Training</h1>
                <ExpItem
                    location="Punjab, India"
                    company="Bangalore Computer Education"
                    role="MERN Stack Development + AI Integration Training"
                    date="June 2025 - Aug 2025"
                    points={[
                        "MongoDB, Express.js, React.js, Node.js, Gemini API, Redux Toolkit, and Tailwind CSS.",
                        "Developed a full-stack web application with AI integration for enhanced user experience.",
                        "Focused on building scalable, maintainable, and efficient web applications.",
                    ]}
                />
                <ExpItem
                    location="Punjab, India"
                    company="Bangalore Computer Education"
                    role="Data Structures and Algorithms Training"
                    date="Dec 2024 - Mar 2025"
                    points={[
                        "In-depth training in data structures and algorithms, focusing on problem-solving skills.",
                        "Covered topics such as arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming.",
                        "Emphasized practical applications and coding challenges to enhance algorithmic thinking.",
                    ]}
                />
                <ExpItem
                    location="Punjab, India"
                    company="Bangalore Computer Education"
                    role="NodeJS Full Stack Development Training"
                    date="June 2024 - July 2024"
                    points={[
                        "Comprehensive training in Node.js for full-stack development.",
                        "Learned to build RESTful APIs, manage databases, and create dynamic web applications.",
                        "Focused on best practices in backend development, including security and performance optimization.",
                    ]}
                />
            </div>
        </ScrollSection>
    );
}

function SkillsSection() {
    return (
        <ScrollSection id="skills">
            <ScrollSectionHeading heading="skills" />
            <div className="flex flex-col gap-2">
                {skills.map((section, index) => (
                    <SkillSection key={index} title={section.title} skills={section.skills} />
                ))}
            </div>
        </ScrollSection>
    );
}

function CertificationsSection() {
    return (
        <ScrollSection id="certif">
            <ScrollSectionHeading heading="certifications & achievements" />
            <div className="flex flex-col gap-4">
                <h1 className="text-neutral-400 text-xs md:text-sm lg:text-xl">Achievements</h1>
                <div className="flex gap-4">
                    <SkillBadge name="C++" icon={<SiCplusplus />} stars={5} />
                    <SkillBadge name="C" icon={<SiCoursera />} stars={2} />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-neutral-400 text-xs md:text-sm lg:text-xl">Certifications</h1>
                <div className="grid grid-cols-3 gap-4">
                    <Certificate certificate={ceisd} link="a.com" />
                    <Certificate certificate={ceiga} link="a.com" />
                    <Certificate certificate={sqlbhack} link="a.com" />
                    <Certificate certificate={jsbhack} link="a.com" />
                    <Certificate certificate={cssbhack} link="a.com" />
                </div>
            </div>
        </ScrollSection>
    );
}

function EducationSection() {
    return (
        <ScrollSection id="education">
            <ScrollSectionHeading heading="education" />
            <EduItem
                location="Punjab, India"
                company="Maharaja Ranjit Singh Punjab Technical University"
                role="Bachelor of Technology in Computer Science & Engineering"
                date="2022 - Ongoing"
            />
            <EduItem
                location="Punjab, India"
                company="Central Board of Secondary Education"
                role="Senior Secondary Schooling"
                date="2021 - 2022"
            />
            <EduItem
                location="Punjab, India"
                company="Central Board of Secondary Education"
                role="Metriculation"
                date="2019 - 2020"
            />
        </ScrollSection>
    );
}

function Home() {
    return (
        <div className="flex flex-col items-center w-full gap-4 md:gap-7 lg:gap-10">
            <ProfileHeader />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <CertificationsSection />
            <EducationSection />
        </div>
    );
}

export default Home;
