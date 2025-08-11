// Dependencies
import React from 'react';
import { motion } from 'framer-motion';

// Components
import NavButton from '../buttons/TextOnlyButton';

// NavLinks Component
// A reusable list of navigation buttons with customizable layout and animation
export default function NavLinks({

    links = [], // Array of link objects with text, to, onClick, icon, and className

    className = '', // Additional CSS classes for the list

}) {
    // Render
    return (
        <motion.ul

            className={`flex w-full justify-center items-center lg:flex-nowrap md:flex-row flex-col md:flex-wrap gap-x-8 ${className}`}

            initial={{ opacity: 0 }} // Initial opacity for animation

            animate={{ opacity: 1 }} // Final opacity for animation

            transition={{ duration: 0.3 }} // Animation duration

        >
            {links.map(({ text, to, onClick, icon, className: buttonClassName }, index) => (
                <li key={index}>
                    <NavButton
                    
                        text={text}
                        
                        to={to}
                        
                        onClick={onClick}
                        
                        icon={icon}
                        
                        className={buttonClassName} // Button-specific CSS classes
                        
                    />
                </li>
            ))}
        </motion.ul>
    );
}