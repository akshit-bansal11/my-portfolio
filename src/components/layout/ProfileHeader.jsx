// Dependencies
import React, { useState } from 'react';
import { hover, motion } from 'framer-motion';

// Icons
import { FaLocationDot, FaCircle, FaPhone, FaArrowDownLong, FaGithub, FaLinkedinIn, FaXTwitter, FaHackerrank } from 'react-icons/fa6';
import { SiGmail, SiLeetcode } from 'react-icons/si';
import Gmail from '../../assets/icons/gmail.svg';
import Phone from '../../assets/icons/phone.svg';

// Images
import Pfp from '../../assets/images/pfp.webp';

import Resume from '/akshit_bansal.pdf?url'

export default function ProfileHeader() {

    const [isClicked, setIsClicked] = useState(false);
    const [isCvHovered, setIsCvHovered] = useState(false);
    const [isGmailHovered, setIsGmailHovered] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <motion.div className="flex items-center justify-center w-full gap-1 lg:h-50 md:h-35 h-20">
            {/* Left Panel */}
            <motion.div
                className="
                    flex items-end justify-between w-full h-full
                    bg-gradient-to-r from-[#414345]/40 to-[#232526]/10
                    backdrop-blur-[3px] lg:backdrop-blur-[1px]
                    p-2 md:p-3 lg:p-5
                    rounded-l-lg lg:rounded-l-2xl
                "
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
                            <h1 className="text-white text-[10px] font-clash md:text-xl lg:text-3xl">
                                Akshit Bansal
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
                        whileHover={{scale: 1.3, rotate: 10}}
                        whileTap={{ scale: 0.95, rotate: 0 }}
                        className="flex items-center gap-1 text-neutral-300 hover:text-white text-[10px] md:text-xl lg:text-3xl"
                    >
                        <img src={Gmail} className='w-8' alt="" />
                    </motion.a>
                    {/* <motion.a
                        href="tel:+917009250361"
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-neutral-300 hover:text-white text-[10px] md:text-xl lg:text-3xl"
                    >
                        <img src={Phone} className='w-8' alt="" />
                    </motion.a> */}
                    <motion.a
                        href={Resume}
                        download="akshit_bansal.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                        onHoverStart={() => setIsCvHovered(true)}
                        onHoverEnd={() => setIsCvHovered(false)}
                        initial = {{ scale: 0.9 }}
                        whileHover = {{ scale: 0.95 }}
                        whileTap={{ scale: 0.5 }}
                        className="flex items-center gap-1 px-2 lg:px-4 py-1 md:py-1 lg:py-2 rounded-full
                            text-neutral-300 hover:text-neutral-800 text-[8px] md:text-sm lg:text-xl font-normal
                            bg-gradient-to-r to-[#414345] from-[#232526]
                            hover:bg-gradient-to-r hover:from-[#ffa600] hover:to-[#ffd900]
                            border border-neutral-500
                            hover:border hover:border-white/0
                            transition-colors duration-100 ease-in
                        "
                    >
                        <p>Download CV</p>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: 4 }}
                            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" , ease: "easeIn" }}
                            className='relative'
                        >
                            <FaArrowDownLong />
                        </motion.div>
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
                <a className='hover:scale-150 transition-transform duration-100 ease-in-out' href="https://github.com/akshit-bansal11" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-white" />
                </a>
                <a className='hover:scale-150 transition-transform duration-100 ease-in-out' href="https://www.linkedin.com/in/akshit-bansal11/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hover:text-sky-600" />
                </a>
                <a className='hover:scale-150 transition-transform duration-100 ease-in-out' href="http://hackerrank.com/profile/akshitbansal11" target="_blank" rel="noopener noreferrer">
                    <FaHackerrank className="hover:text-green-500" />
                </a>
                <a className='hover:scale-150 transition-transform duration-100 ease-in-out' href="https://x.com/akshit_bansal11" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="hover:text-white" />
                </a>
                <a className='hover:scale-150 transition-transform duration-100 ease-in-out' href="https://leetcode.com/u/akshit-bansal11/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="hover:text-amber-400" />
                </a>
            </motion.div>
        </motion.div>
    );
}
