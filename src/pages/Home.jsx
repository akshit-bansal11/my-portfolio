//--------------------------------------------------------------//
//--------------------------------------------------------------//
//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|    DEPENDENCIES    |--------------------//
//--------------------|____________________|--------------------//
//--------------------------------------------------------------//
//--------------------------------------------------------------//
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';



//--------------------------------------------------------------//
//--------------------------------------------------------------//
//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|       ASSETS       |--------------------//
//--------------------|____________________|--------------------//
//--------------------------------------------------------------//
//--------------------------------------------------------------//


//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|    Certificates    |--------------------//
//--------------------|____________________|--------------------//

// LinkedIn + Microsoft
import ceisd from '../assets/images/certificates/ceisd.webp';
import ceiga from '../assets/images/certificates/ceiga.webp';

// HackerRank
import sqlbhack from '../assets/images/certificates/sqlbhack.webp';
import jsbhack from '../assets/images/certificates/jsbhack.webp';
import cssbhack from '../assets/images/certificates/cssbhack.webp';


//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|        Icons       |--------------------//
//--------------------|____________________|--------------------//

// Simple Icons
import { SiCplusplus, SiGmail, SiLeetcode, SiCoursera } from "react-icons/si";

// Github Octicons

//--------------------------------------------------------------//
//--------------------------------------------------------------//
//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|     COMPONENTS     |--------------------//
//--------------------|____________________|--------------------//
//--------------------------------------------------------------//
//--------------------------------------------------------------//

// Cards
import EduItem from '../components/common/cards/EduItem.jsx';
import Certificate from '../components/common/cards/Certificate.jsx';
import SkillBadge from '../components/common/cards/SkillBadge.jsx';

// Layout
// import ProfileHeaderOld from '../components/layout/home/ProfileHeaderOld.jsx';
import ProfileHeader from '../components/layout/home/ProfileHeader.jsx';
import About from '../components/layout/home/About.jsx'
import Projects from '../components/layout/home/Projects.jsx'
import Experience from '../components/layout/home/Experience.jsx'
import Skills from '../components/layout/home/Skills.jsx';



// ──────────────────────────────────────────────
// Config
// ──────────────────────────────────────────────



import ScrollSection from '../components/common/sections/ScrollSection.jsx';
import ScrollSectionHeading from '../components/common/headings/ScrollSectionHeading.jsx';

// ──────────────────────────────────────────────
// Certificates Section
// ──────────────────────────────────────────────




// ──────────────────────────────────────────────
// Education Section
// ──────────────────────────────────────────────
function Education() {
    return (
        <ScrollSection id="education">
            <div className="flex w-full gap-2 items-baseline"><ScrollSectionHeading heading="education" /></div>
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
        <div className="flex flex-col items-center w-full gap-4 md:gap-7 lg:gap-30">
            <About
                text="Building Practical Web Experiences"
                delay={150}
                animateBy="words"
                direction="top"
                className="lg:text-[100px] md:text-[60px] mb-10 text-[30px] items-center justify-center text-white bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 bg-clip-text drop-shadow-2xl"
            />
            <ProfileHeader />
            <Projects />
            <Experience />
            <Skills />
            {/* <Certifications /> */}
            <Education />
        </div>
    );
}

export default Home;
