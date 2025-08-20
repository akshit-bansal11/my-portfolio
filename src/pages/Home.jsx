// ──────────────────────────────────────────────
// Dependencies
// ──────────────────────────────────────────────
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

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

// Sections
import ScrollSection from '../components/common/sections/ScrollSection';
import SkillSection from '../components/common/sections/SkillSection';

// Buttons
import NavButton from '../components/common/buttons/TextOnlyButton.jsx';

// Headings
import ScrollSectionHeading from '../components/common/headings/ScrollSectionHeading.jsx';

// Cards
import ProjectCard from '../components/common/cards/ProjectCard.jsx';
import ExpItem from '../components/common/cards/ExpItem.jsx';
import EduItem from '../components/common/cards/EduItem.jsx';
import Certificate from '../components/common/cards/Certificate.jsx';
import SkillBadge from '../components/common/cards/SkillBadge.jsx';

// Layout
import ProfileHeader from '../components/layout/ProfileHeader.jsx';



// ──────────────────────────────────────────────
// Config
// ──────────────────────────────────────────────
import { skills } from '../config/SkillsConfig.js';



// ──────────────────────────────────────────────
// Assets
// ──────────────────────────────────────────────

// Projects
import Inf from '../assets/images/projects/Websites/influera.webp';
import Med from '../assets/images/projects/Websites/mediShare.webp';

// Certificates
import ceisd from '../assets/images/certificates/ceisd.webp';
import ceiga from '../assets/images/certificates/ceiga.webp';
import sqlbhack from '../assets/images/certificates/sqlbhack.webp';
import jsbhack from '../assets/images/certificates/jsbhack.webp';
import cssbhack from '../assets/images/certificates/cssbhack.webp';

// Arrows
import ArrowDR from '../assets/arrows/DownRight.svg'
import ArrowUR from '../assets/arrows/UpRight.svg'
import ArrowUL from '../assets/arrows/UpLeft.svg'
import ArrowDL from '../assets/arrows/DownLeft.svg'



// ──────────────────────────────────────────────
// About Section
// ──────────────────────────────────────────────
function About({
    text = "Building Practical Web Experiences",
    delay = 150,
    animateBy = "words",
    direction = "top",
    className = "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center",
}) {
    const buildKeyframes = (from, steps) => {
        const keys = new Set([
            ...Object.keys(from),
            ...steps.flatMap((s) => Object.keys(s)),
        ]);
        const keyframes = {};
        keys.forEach((k) => {
            keyframes[k] = [from[k], ...steps.map((s) => s[k])];
        });
        return keyframes;
    };

    const BlurText = ({
        text,
        delay,
        className,
        animateBy,
        direction,
        threshold = 0.1,
        rootMargin = "0px",
        animationFrom,
        animationTo,
        easing = (t) => t,
        onAnimationComplete,
        stepDuration = 0.35,
    }) => {
        const elements = animateBy === "words" ? text.split(" ") : text.split("");
        const [inView, setInView] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
            if (!ref.current) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(ref.current);
                    }
                },
                { threshold, rootMargin }
            );
            observer.observe(ref.current);
            return () => observer.disconnect();
        }, [threshold, rootMargin]);

        const defaultFrom =
            direction === "top"
                ? { filter: "blur(10px)", opacity: 0, y: -50 }
                : { filter: "blur(10px)", opacity: 0, y: 50 };

        const defaultTo = [
            { filter: "blur(5px)", opacity: 0.5, y: direction === "top" ? 5 : -5 },
            { filter: "blur(0px)", opacity: 1, y: 0 },
        ];

        const fromSnapshot = animationFrom ?? defaultFrom;
        const toSnapshots = animationTo ?? defaultTo;

        const stepCount = toSnapshots.length + 1;
        const totalDuration = stepDuration * (stepCount - 1);
        const times = Array.from({ length: stepCount }, (_, i) =>
            stepCount === 1 ? 0 : i / (stepCount - 1)
        );

        return (
            <div>
                <p
                    ref={ref}
                    className={`blur-text ${className} flex flex-wrap justify-center`}
                >
                    {elements.map((segment, index) => {
                        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

                        const spanTransition = {
                            duration: totalDuration,
                            times,
                            delay: (index * delay) / 1000,
                            ease: easing,
                        };

                        return (
                            <motion.span
                                key={index}
                                className="inline-block will-change-[transform,filter,opacity]"
                                initial={fromSnapshot}
                                animate={inView ? animateKeyframes : fromSnapshot}
                                transition={spanTransition}
                                onAnimationComplete={
                                    index === elements.length - 1 ? onAnimationComplete : undefined
                                }
                            >
                                {segment === " " ? "\u00A0" : segment}
                                {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
                            </motion.span>
                        );
                    })}
                </p>

            </div>
        );
    };

    return (
        <div>
            <motion.section
                id="about"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full flex flex-col items-center text-center px-6 py-12"
            >
                {/* Headline */}
                <BlurText
                    text={text}
                    delay={delay}
                    animateBy={animateBy}
                    direction={direction}
                    className={`${className} bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-xl`}
                />

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 max-w-3xl text-neutral-400 text-sm md:text-lg lg:text-xl leading-relaxed"
                >
                    <p>
                        Hi, I’m <span className="text-white font-medium">Akshit Bansal</span> — a{" "}
                        <span className="text-amber-400">Full-Stack Developer</span> passionate about
                        crafting practical, scalable, and visually appealing web applications.
                    </p>
                    <p className="mt-3">
                        I specialize in the <span className="text-pink-400">MERN stack</span> and love
                        solving real problems by blending clean code with thoughtful design.
                        From seamless UIs to reliable backends, I enjoy turning ideas into
                        experiences people actually use.
                    </p>
                </motion.div>
            </motion.section>
            {/* <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="opacity-30"
            >
                <motion.img
                    initial = {{ x: -100, y: 100, opacity: 0 }}
                    whileInView = {{ x: 0, y: 0, opacity: 1 }}
                    transition = {{ duration: 1 }}
                    className='absolute top-60 left-280 w-15'
                    src={ArrowUR}
                    alt=""
                />
                <motion.img
                    initial = {{ x: 100, y: 100, opacity: 0 }}
                    whileInView = {{ x: 0, y: 0, opacity: 1 }}
                    transition = {{ duration: 1 }}
                    className='absolute top-60 left-20 w-15'
                    src={ArrowUL}
                    alt=""
                />
                <motion.img
                    initial = {{ x: -100, y: -100, opacity: 0 }}
                    whileInView = {{ x: 0, y: 0, opacity: 1 }}
                    transition = {{ duration: 1 }}
                    className='absolute top-130 left-260 w-15'
                    src={ArrowDR}
                    alt=""
                />
                <motion.img
                    initial = {{ x: 100, y: -100, opacity: 0 }}
                    whileInView = {{ x: 0, y: 0, opacity: 1 }}
                    transition = {{ duration: 1 }}
                    className='absolute top-130 left-45 w-15'
                    src={ArrowDL}
                    alt=""
                />
                <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                    className='absolute text-white text-4xl font-bold -rotate-25 top-45 left-5'
                >
                    UI/UX
                </motion.div>
                <motion.div
                    animate={{ rotate: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                    className='absolute text-white text-4xl font-bold rotate-25 top-45 left-285 w-15'
                >
                    MERN
                </motion.div>
                <motion.div
                    animate={{ rotate: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                    className='absolute text-white text-4xl font-bold rotate-25 top-145 left-32 w-15'
                >
                    React
                </motion.div>
                <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                    className='absolute text-white text-4xl font-bold -rotate-25 top-150 left-264 w-15'
                >
                    Tailwind
                </motion.div>
            </motion.section> */}
        </div>
    );
}



// ──────────────────────────────────────────────
// Projects Section
// ──────────────────────────────────────────────
function Projects() {
    return (
        <ScrollSection id="projects">
            <div className="flex justify-between w-full">
                <ScrollSectionHeading heading="projects" />

                <NavButton to="/projects">
                    <p>See More</p>
                    <GoArrowUpRight />
                </NavButton>
            </div>
            <div className="flex flex-col p-4 justify-center gap-8 lg:flex-row lg:justify-around">
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



// ──────────────────────────────────────────────
// Experience Section
// ──────────────────────────────────────────────
function Experience() {
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



// Skills Section
function Skills() {
    return (
        <ScrollSection id="skills">
            <ScrollSectionHeading heading="skills" />
            <div className="flex flex-col md:gap-5 gap-2">
                {skills.map((section, index) => (
                    <SkillSection key={index} title={section.title} skills={section.skills} />
                ))}
            </div>
        </ScrollSection>
    );
}



// ──────────────────────────────────────────────
// Certificates Section
// ──────────────────────────────────────────────
function Certifications() {
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



// ──────────────────────────────────────────────
// Education Section
// ──────────────────────────────────────────────
function Education() {
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



// ──────────────────────────────────────────────
// Main Render
// ──────────────────────────────────────────────
function Home() {
    return (
        <div className="flex flex-col items-center w-full gap-4 md:gap-7 lg:gap-10">
            <About
                text="Building Practical Web Experiences"
                delay={150}
                animateBy="words"
                direction="top"
                className="lg:text-[100px] md:text-[60px] text-[30px] items-center justify-center text-white mb-8 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 bg-clip-text drop-shadow-2xl"
            />
            <ProfileHeader />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Education />
        </div>
    );
}

export default Home;
