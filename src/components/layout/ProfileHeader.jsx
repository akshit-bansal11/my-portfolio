// Dependencies
import React, { useState } from 'react';
import { hover, motion } from 'framer-motion';

// Icons
import { FaLocationDot, FaCircle, FaArrowDownLong, FaGithub, FaLinkedinIn, FaXTwitter, FaHackerrank } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import Gmail from '../../assets/icons/gmail.svg';

// Images
import Pfp from '../../assets/images/pfp.webp';
import Resume from '/akshit_bansal.pdf?url';

// Constants
const SOCIAL_LINKS = [
    { Name: "GitHub", Icon: FaGithub, href: "https://github.com/akshit-bansal11", hoverColor: "hover:text-white" },
    { Name: "LinkedIn", Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/akshit-bansal11/", hoverColor: "hover:text-sky-600" },
    { Name: "HackerRank", Icon: FaHackerrank, href: "http://hackerrank.com/profile/akshitbansal11", hoverColor: "hover:text-green-500" },
    { Name: "Twitter", Icon: FaXTwitter, href: "https://x.com/akshit_bansal11", hoverColor: "hover:text-white" },
    { Name: "LeetCode", Icon: SiLeetcode, href: "https://leetcode.com/u/akshit-bansal11/", hoverColor: "hover:text-amber-400" }
];

const ProfileHeader = () => {

    const ProfileInfo = () => (
        <motion.div className="flex md:flex-row flex-col items-center w-full h-full md:gap-3 lg:gap-4">
            <img
                src={Pfp}
                alt="Profile"
                className="
                    lg:h-41 md:h-[122px] h-20
                    rounded-sm md:rounded-lg lg:rounded-xl
                    md:translate-y-0 translate-y-[-40px]
                "
            />
            <div className="flex flex-col justify-between gap-4 md:gap-5 lg:gap-8">
                <div>
                    <h1 className="text-white text-[10px] font-clash md:text-xl lg:text-3xl">
                        Akshit Bansal
                    </h1>
                    <h2 className="text-neutral-400 lg:text-nowrap text-[8px] md:text-sm lg:text-lg">
                        MERN-Stack Developer | Web Designer
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
        </motion.div>
    );

    const ContactButtons = () => (
        <div className="flex not-md:w-full items-center justify-between md:gap-3 lg:gap-4 text-nowrap">
            <motion.a
                href="mailto:artistbansal2004@gmail.com"
                target="_blank"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
                className="flex items-center gap-1 text-neutral-300 hover:text-white text-[10px] md:text-xl lg:text-3xl"
            >
                <picture>
                    <source type="image/webp" srcSet={Gmail} />
                    <img src={Gmail} className='min-w-4 md:min-w-6 lg:min-w-8' alt="Gmail" />
                </picture>
            </motion.a>
            <motion.a
                href={Resume}
                download="akshit_bansal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.7 }}
                className="
                    group flex items-center gap-4 px-2 lg:px-4 py-1 md:py-1 lg:py-2 rounded-2xl
                    text-neutral-300 text-[8px] md:text-sm lg:text-xl font-normal
                    hover:text-amber-400
                    [text-shadow:_0_0_10px_rgb(251_191_36_/_0)] hover:[text-shadow:_0_0_10px_rgb(251_191_36_/_10)]
                    bg-gradient-to-r to-[#414345] from-[#232526]
                    border border-neutral-500
                    hover:border-0
                    transition-colors duration-100 ease-in"
            >
                <p>Download CV</p>
                <div className="
                    w-min h-min p-2 rounded-lg
                    bg-gradient-to-r to-[#ffd900] from-[#ffa600]
                    group-hover:bg-gradient-to-r group-hover:from-neutral-800 group-hover:to-neutral-800
                    text-neutral-900 group-hover:text-amber-400
                    transition-all duration-100
                ">
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: 5 }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className="relative"
                    >
                        <FaArrowDownLong className="transition-transform duration-100" />
                    </motion.div>
                </div>
            </motion.a>
        </div>
    );

    const SocialLinks = () => (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
            className="
                flex flex-row md:flex-col md:justify-center justify-evenly md:w-min w-full
                backdrop-blur-[3px] lg:backdrop-blur-[1px] 
                p-1.5 md:p-3 lg:p-5
                gap-1.5 md:gap-2 lg:gap-4
                rounded-b-lg md:rounded-bl-none md:rounded-r-lg lg:rounded-r-2xl
                text-[8px] md:text-lg lg:text-xl 
                border border-neutral-600
                text-neutral-400
            "
        >
            {SOCIAL_LINKS.map(({ Icon, href, hoverColor }) => (
                <a
                    key={href}
                    className='hover:scale-150 transition-transform duration-100 ease-in-out'
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <picture>
                        <source type="image/webp" srcSet={`${Icon}`} />
                        <img src={`${Icon}`} className='min-w-4 md:min-w-6 lg:min-w-8' alt={Name} />
                    </picture> */}
                    <Icon className={`${hoverColor}`} />
                </a>
            ))}
        </motion.div>
    );

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex md:flex-row flex-col items-center justify-center md:w-full not-md:max-w-100 not-md:mt-10 gap-1"
        >
            <motion.div className="
                flex md:flex-row flex-col items-end justify-between md:w-[90%] w-max h-full  gap-4
                lg:rounded-l-2xl md:rounded-l-lg md:rounded-tr-none rounded-t-lg
                backdrop-blur-[3px] lg:backdrop-blur-[1px]
                p-2 md:p-3 lg:p-5
                border border-neutral-100/30"
            >
                <ProfileInfo />
                <ContactButtons />
            </motion.div>
            <SocialLinks />
        </motion.div>
    );
};

export default ProfileHeader;
