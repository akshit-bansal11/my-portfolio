// Dependencies
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Components
import NavLinks from '../common/sections/NavLinks';

// Config
import { navConfigs } from '../../config/NavConfig';

// Utility function to scroll to a section by ID
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// NavBar Component
export default function NavBar({ page = 'home' }) {
    const [isOpen, setIsOpen] = useState(false); // Toggle mobile menu
    const navItems = navConfigs[page] || [];

    const links = navItems.map((item) => ({
        ...item,
        icon: item.icon ? <item.icon /> : null,
        onClick: () => {
            scrollToSection(item.to);
            setIsOpen(false); // Close menu after clicking
        },
    }));

    return (
        <motion.nav 
            initial = {{ y: -100, opacity: 0 }}
            animate = {{ y: 0, opacity: 1 }}
            transition = {{ duration: 1, ease: 'easeInOut' }}
            className="flex items-center w-full lg:w-min justify-between lg:justify-center px-5 py-3 lg:backdrop-blur-[1px] backdrop-blur-[3px] border border-neutral-100/30 rounded-2xl">
            
            {/* Hamburger for small screens */}
            <div className="lg:hidden md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-sm focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Links for large screens */}
            <div className="hidden md:flex md:m-auto">
                <NavLinks links={links}/>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="top-full left-0 w-full lg:hidden">
                    <NavLinks
                        links={links}
                        className="flex-col gap-4 py-4"
                    />
                </div>
            )}
        </motion.nav>
    );
}
